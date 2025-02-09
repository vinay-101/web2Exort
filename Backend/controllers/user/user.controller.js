const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user/User");
const uuid = require("uuid").v4;
const fs = require("fs");
const { Op, Sequelize } = require("sequelize");
const helpers = require("../../helper/function");
const {
  signupValidation,
  forgetPasswordValidation,
  changePasswordValidation,
  completeProfileValidation,
  updateProfileValidator,
  enquirySchema,
} = require("../../validators/user.validator");
const { HttpStatus, CustomMessages } = require("../../helper/statusCode");
const Response = require("../../helper/response");
const Enquiry = require("../../models/user/Enquiry");

const createJWT = (user) => {
  return jwt.sign(user, process.env.SECRETKEY, {
    expiresIn: "7d",
  });
};

const signUpUser = async (req, res) => {
  try {
    const validationResult = await signupValidation.validateAsync(req.body);
    const {
      name,
      email,
      phoneNumber,
      password,
      country,
      state,
      city,
      company,
      userType,
      terms,
    } = validationResult;

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      phoneNumber,
      password: hashPassword,
      country,
      state,
      city,
      company,
      userType: userType,
      terms,
    });

    if (user) {
      let data = {
        message: `Your OTP is for verification is`,
        number: user.phoneNumber,
      };
      let otp = await helpers.sendOtp(data);
      user.loginOtp = otp;
      await user.save();
      user.loginOtp = "";
    }

    return res
      .status(HttpStatus.CREATED.code)
      .send(new Response(true, `User ${CustomMessages.MESSAGE.userRegistersuccessfully}`, { user }));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { password, identity = "" } = req.body;
    if (password && identity) {
      const user = await User.findOne({
        where: {
          [Op.or]: [{ email: identity }, { phoneNumber: identity }],
        },
      });

      if (!user) {
        return res
          .status(HttpStatus.FORBIDDEN.code)
          .send(
            new Response(
              false,
              "This account has not registered yet. Please register yourself"
            )
          );
      }

      if (user.userStatus === "Banned") {
        return res
          .status(HttpStatus.FORBIDDEN.code)
          .send(
            new Response(
              false,
              "Your account has been banned, please contact admin"
            )
          );
      }

      if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
          if (!user.isVerified) {
            return res
              .status(HttpStatus.UNAUTHORIZED.code)
              .send(
                new Response(false, CustomMessages.MESSAGE.accountNotVerified)
              );
          }
          const jwtuser = {
            id: user.id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            userType: user.userType,
          };
          const token = createJWT(jwtuser);
          user.loginOtp = "";
          return res
            .status(HttpStatus.OK.code)
            .send(
              new Response(
                true,
                `User ${CustomMessages.MESSAGE.loginSuccess}`,
                { user: user, access_token: token }
              )
            );
        }

        return res
          .status(HttpStatus.UNAUTHORIZED.code)
          .send(
            new Response(false, `${CustomMessages.MESSAGE.inValid} credentials`)
          );
      }
    } else {
      return res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(
          new Response(false, CustomMessages.MESSAGE.emailPasswordNotFound)
        );
    }

    res
      .status(HttpStatus.NOT_FOUND.code)
      .send(new Response(false, `User ${HttpStatus.NOT_FOUND.message}`));
  } catch (err) {
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
      .send(new Response(false, `${err}`));
  }
};

const LoginSendOtp = async (req, res) => {
  const { identity } = req.body;

  if (identity) {
    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: identity }, { phoneNumber: identity }],
      },
    });

    if (user) {
      let data = {
        message: `Your OTP is for verification is`,
        number: user.phoneNumber,
      };
      let otp = await helpers.sendOtp(data);

      if (otp) {
        user.loginOtp = otp;
        await user.save();

        return res
          .status(HttpStatus.OK.code)
          .send(new Response(true, CustomMessages.MESSAGE.otpSentSuccessfully));
      }
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
        .send(new Response(false, CustomMessages.MESSAGE.otpSendingFailed));
    } else {
      return res
        .status(HttpStatus.NOT_FOUND.code)
        .send(new Response(false, `Email ${HttpStatus.NOT_FOUND.message}`));
    }
  }
  return res
    .status(HttpStatus.BAD_REQUEST.code)
    .send(new Response(false, `${HttpStatus.BAD_REQUEST.message}`));
};

const LoginVerifyOtp = async (req, res) => {
  const { identity, otp } = req.body;
  try {
    if (identity && otp) {
      const user = await User.findOne({
        where: {
          [Op.or]: [
            { email: identity },
            { phoneNumber: identity }
          ]
        },
      });

      if(!user){
        return res
        .status(HttpStatus.NOT_FOUND.code)
        .send(new Response(false, `User not found`));
      }

      if (user) {
        if (otp == user.loginOtp) {
          if (user.userStatus === "Banned") {
            return res
              .status(HttpStatus.FORBIDDEN.code)
              .send(
                new Response(
                  false,
                  "Your account has been banned, please contact admin"
                )
              );
          }

          user.isVerified = true;
          user.accountActivatedAt = new Date();
          await user.save();
          return res
            .status(HttpStatus.OK.code)
            .send(
              new Response(
                true,
                CustomMessages.MESSAGE.phoneVerifiedSuccessfully
              )
            );
        }

        return res
          .status(HttpStatus.UNAUTHORIZED.code)
          .send(new Response(false, `${CustomMessages.MESSAGE.inValid} OTP`));
      }
    } else {
      return res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(new Response(false, `Please enter Phone Number and OTP`));
    }
  } catch (e) {
    console.log(e);
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
      .send(new Response(false, e.message));
  }
};

const forgetPasswordSendOtp = async (req, res) => {
  const { identity } = req.body;

  if (identity) {
    const user = await User.findOne({
      where: {
        [Op.or]:[
          {
            phoneNumber: identity,
          },
          {
            email: identity
          }
        ]
      },
    });

    if(!user){
      return res
      .status(HttpStatus.NOT_FOUND.code)
      .send(new Response(false, `User not found`));
    }

    if (user) {
      if (!user.isVerified) {
        return res
          .status(HttpStatus.UNAUTHORIZED.code)
          .send(new Response(false, CustomMessages.MESSAGE.accountNotVerified));
      }

      let data = {
        message: `Your OTP for Forgot password is`,
        number: user.phoneNumber,
      };
      let otp = await helpers.sendOtp(data);

      if (otp) {
        user.loginOtp = otp;
        user.forgetPasswordToken = uuid();
        await user.save();

        return res
          .status(HttpStatus.OK.code)
          .send(new Response(true, CustomMessages.MESSAGE.otpSentSuccessfully));
      }
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
        .send(new Response(false, CustomMessages.MESSAGE.otpSendingFailed));
    } else {
      return res
        .status(HttpStatus.NOT_FOUND.code)
        .send(new Response(false, `EMAIL ${HttpStatus.NOT_FOUND.message}`));
    }
  }
  return res
    .status(HttpStatus.BAD_REQUEST.code)
    .send(new Response(false, `${HttpStatus.BAD_REQUEST.message}`));
};

const forgetPasswordVerifyOtp = async (req, res) => {
  try {
    const { identity, otp } = req.body;

    if (identity && otp) {
      const user = await User.findOne({
        where: {
          [Op.or]:[
            {
              phoneNumber: identity,
            },
            {
              email: identity,
            }
          ]
        },
      });

      if (user) {
        if (otp == user.loginOtp) {
          user.loginOtp = 0;
          await user.save();
          return res
            .status(HttpStatus.OK.code)
            .send(
              new Response(
                true,
                `${CustomMessages.MESSAGE.otpVerifiedSuccessfully}`,
                user.forgetPasswordToken
              )
            );
        } else {
          return res
            .status(HttpStatus.UNAUTHORIZED.code)
            .send(new Response(false, `${CustomMessages.MESSAGE.inValid} OTP`));
        }
      } else {
        return res
          .status(HttpStatus.NOT_FOUND.code)
          .send(new Response(false, `User ${HttpStatus.NOT_FOUND.message}`));
      }
    } else {
      return res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(new Response(false, `Phone Number and OTP is required`));
    }
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const resetForgetPassword = async (req, res) => {
  try {
    const validationResult = await forgetPasswordValidation.validateAsync(
      req.body
    );
    const { password, confirm_password, forget_password_token } =
      validationResult;
    if (password && confirm_password) {
      if (password !== confirm_password) {
        return res
          .status(HttpStatus.BAD_REQUEST.code)
          .send(
            new Response(false, `Password and Confirm Password must match.`)
          );
      }
      const user = await User.findOne({
        where: {
          forgetPasswordToken: forget_password_token,
        },
      });

      if (user) {
        const isSamePassword = await bcrypt.compare(password, user.password);
        if (isSamePassword) {
          return res
            .status(400)
            .send(
              new Response(
                false,
                "New password can't be the same as the old password"
              )
            );
        }

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        const updatePassword = await User.update(
          {
            password: hashPassword,
          },
          {
            where: {
              forgetPasswordToken: forget_password_token,
            },
          }
        );
        user.forgetPasswordToken = null;
        await user.save();

        if (updatePassword) {
          return res
            .status(HttpStatus.UPDATED.code)
            .send(new Response(true, `Password ${HttpStatus.UPDATED.message}`));
        }
      } else {
        return res
          .status(HttpStatus.BAD_REQUEST.code)
          .send(new Response(false, `Wrong Token`));
      }
    } else {
      return res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(
          new Response(false, `Password and Confirm Password is required.`)
        );
    }
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const changePassword = async (req, res) => {
  try {
    const validationResult = await changePasswordValidation.validateAsync(req.body);
    const { password, confirm_password, current_password } = validationResult;
    if (password && confirm_password) {
      if (password !== confirm_password) {
          return res
              .status(HttpStatus.BAD_REQUEST.code)
              .send(
                  new Response(false, `Password & Confirm password should match`)
              );
        }

    const user = await User.findOne({
      where:{
        id: req.userId
      }
    });

      if (user) {
        if (!user.isVerified) {
            return res
                .status(HttpStatus.UNAUTHORIZED.code)
                .send(
                    new Response(false, CustomMessages.MESSAGE.accountNotVerified)
                );
        }
        const currentPassword = await bcrypt.compare(current_password, user.password);
        if (currentPassword === false) {
            return res.status(400).send(new Response(false, "Password not matched"))
        }

        const isSamePassword = await bcrypt.compare(password, user.password);
        if (isSamePassword) {
            return res.status(400).send(new Response(false, "Old password & New password can't be same"))
        }

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        const updatePassword = await User.update(
            {
              password: hashPassword,
            },
            {
              where: {
                id: req.userId,
              },
            }
        );
        // await user.save();
        if (updatePassword) {
            return res
                .status(HttpStatus.UPDATED.code)
                .send(new Response(true, `Password ${HttpStatus.UPDATED.message}`));
        }
      } else {
          return res
              .status(HttpStatus.BAD_REQUEST.code)
              .send(new Response(false, `Wrong token`));
      }
    } else {
        return res
            .status(HttpStatus.BAD_REQUEST.code)
            .send(
                new Response(false, `Please enter Password & Confirm password both`)
            );
      }
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
}


const getProfile = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.userId,
      },
      attributes: [
        "id",
        "name",
        "email",
        "phoneNumber",
        "profileImage",
        "country",
          "state",
          "city",
          "company",
          "userType"
      ],
    });

    user
      ? res
        .status(HttpStatus.OK.code)
        .send(new Response(true, `${HttpStatus.OK.message}`, user))
      : res
        .status(HttpStatus.OK.code)
        .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const validationResult = await updateProfileValidator.validateAsync(
      req.body
    );
    let { name, email, country, state, city, company} = validationResult;

    let user = await User.findOne({
      where: {
        id: req.userId,
      },
    });

      // let profileImage = `users/${req.files.profile_img[0].filename}`;
    let updatedUser = user.update({
        name,
        email,
        country,
        state,
        city,
        company,
        // phoneNumber: mobile_number,
        // profileImage: profileImage,
      });


    updatedUser
      ? res
        .status(HttpStatus.UPDATED.code)
        .send(new Response(true, `Profile ${HttpStatus.UPDATED.message}`, user))
      : res
        .status(HttpStatus.OK.code)
        .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};


const createEnquiry = async(req,res)=>{
  try{
    const validationResult = await enquirySchema.validateAsync(req.body);
    const {userId, requirement, fullname, email, phoneNumber, companyName, userType } = validationResult;

    let enquiry = await Enquiry.create({userId: userId || null, requirement, fullname, email, phoneNumber, companyName, userType});

    enquiry
    ? res
      .status(HttpStatus.CREATED.code)
      .send(new Response(true, `Enquiry ${HttpStatus.CREATED.message}`, enquiry))
    : res
      .status(HttpStatus.FORBIDDEN.code)
      .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
  }catch(error){
    return helpers.validationHandler(res, error);
  }
}

const allEnquiry = async(req,res)=>{
  try{
    let { page, size} = req.query;

    if (!size) size = 5;
    else size = parseInt(size);
    if (!page) page = 1;
    else page = parseInt(page);
    let skip = size * (parseInt(page) - 1);

    console.log("userId---->>>>>>",req.userId);

    let enquiry = await Enquiry.findAll({
      where:{
        userId: req.userId
      },
      limit: size,
      offset: skip,
    });

    let totalEnquiry = await Enquiry.count({
      where:{
        userId: req.userId
      }
    });

    const data = {
      totalPages: Math.ceil(totalEnquiry / size),
      totalRecords: totalEnquiry,
      enquiry,
    }

    enquiry
    ? res
      .status(HttpStatus.OK.code)
      .send(new Response(true, `Enquiry ${HttpStatus.OK.message}`, data))
    : res
      .status(HttpStatus.FORBIDDEN.code)
      .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));

  }catch(error){
    return helpers.validationHandler(res, error);
  }
}

module.exports = {
  signUpUser,
  userLogin,
  LoginSendOtp,
  LoginVerifyOtp,
  forgetPasswordSendOtp,
  forgetPasswordVerifyOtp,
  resetForgetPassword,
  getProfile,
  updateProfile,
  createEnquiry,
  allEnquiry,
  changePassword,
};
