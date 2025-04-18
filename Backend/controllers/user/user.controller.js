const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user/User");
const uuid = require("uuid").v4;
const fs = require("fs");
const { Op, Sequelize, where } = require("sequelize");
const helpers = require("../../helper/function");
const {
  signupValidation,
  forgetPasswordValidation,
  changePasswordValidation,
  completeProfileValidation,
  updateProfileValidator,
  enquirySchema,
  companyValidationSchema,
  companyInfoValidationSchema,
  companyCertificationValidationSchema,
  companyDocumentValidationSchema,
  companyRegistrationValidationSchema,
  officeLocationValidationSchema,
  userSubscriptionValidationSchema,
} = require("../../validators/user.validator");
const { HttpStatus, CustomMessages } = require("../../helper/statusCode");
const Response = require("../../helper/response");
const Enquiry = require("../../models/user/Enquiry");
const Company = require("../../models/user/Company");
const CompanyCertification = require("../../models/user/CompanyCertification");
const CompanyDocument = require("../../models/user/CompanyDocument");
const CompanyRegistration = require("../../models/user/CompanyRegistration");
const CompanyOfficeLocation = require("../../models/user/CompanyOfficeLocation");
const UserSubscription = require("../../models/user/UserSubscription");
const Subscription = require("../../models/user/Subscription");

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
      .send(
        new Response(
          true,
          `User ${CustomMessages.MESSAGE.userRegistersuccessfully}`,
          { user }
        )
      );
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
          [Op.or]: [{ email: identity }, { phoneNumber: identity }],
        },
      });

      if (!user) {
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
        [Op.or]: [
          {
            phoneNumber: identity,
          },
          {
            email: identity,
          },
        ],
      },
    });

    if (!user) {
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
          [Op.or]: [
            {
              phoneNumber: identity,
            },
            {
              email: identity,
            },
          ],
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
    const validationResult = await changePasswordValidation.validateAsync(
      req.body
    );
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
        where: {
          id: req.userId,
        },
      });

      if (user) {
        if (!user.isVerified) {
          return res
            .status(HttpStatus.UNAUTHORIZED.code)
            .send(
              new Response(false, CustomMessages.MESSAGE.accountNotVerified)
            );
        }
        const currentPassword = await bcrypt.compare(
          current_password,
          user.password
        );
        if (currentPassword === false) {
          return res
            .status(400)
            .send(new Response(false, "Password not matched"));
        }

        const isSamePassword = await bcrypt.compare(password, user.password);
        if (isSamePassword) {
          return res
            .status(400)
            .send(
              new Response(false, "Old password & New password can't be same")
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
};

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
        "userType",
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
    let { name, email, country, state, city, company } = validationResult;

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
          .send(
            new Response(true, `Profile ${HttpStatus.UPDATED.message}`, user)
          )
      : res
          .status(HttpStatus.OK.code)
          .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createEnquiry = async (req, res) => {
  try {
    const validationResult = await enquirySchema.validateAsync(req.body);
    const {
      userId,
      requirement,
      fullname,
      email,
      phoneNumber,
      companyName,
      userType,
    } = validationResult;

    let enquiry = await Enquiry.create({
      userId: userId || null,
      requirement,
      fullname,
      email,
      phoneNumber,
      companyName,
      userType,
    });

    enquiry
      ? res
          .status(HttpStatus.CREATED.code)
          .send(
            new Response(true, `Enquiry ${HttpStatus.CREATED.message}`, enquiry)
          )
      : res
          .status(HttpStatus.FORBIDDEN.code)
          .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const allEnquiry = async (req, res) => {
  try {
    let { page, size } = req.query;

    if (!size) size = 5;
    else size = parseInt(size);
    if (!page) page = 1;
    else page = parseInt(page);
    let skip = size * (parseInt(page) - 1);

    console.log("userId---->>>>>>", req.userId);

    let enquiry = await Enquiry.findAll({
      where: {
        userId: req.userId,
      },
      limit: size,
      offset: skip,
    });

    let totalEnquiry = await Enquiry.count({
      where: {
        userId: req.userId,
      },
    });

    const data = {
      totalPages: Math.ceil(totalEnquiry / size),
      totalRecords: totalEnquiry,
      enquiry,
    };

    enquiry
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `Enquiry ${HttpStatus.OK.message}`, data))
      : res
          .status(HttpStatus.FORBIDDEN.code)
          .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createCompanyProfileGeneralDetail = async (req, res) => {
  try {
    const validationResult = await companyValidationSchema.validateAsync(
      req.body
    );
    const {
      companyDescription,
      companyLogo,
      profileBanner,
      country,
      state,
      city,
      zipCode,
      streetAddress,
      primaryBusinessType,
      businessCategories,
      workingDays,
      alternateMobileNumber,
      alternateEmail,
      landlineNumber,
      faxNumber,
      companyName,
      contactPerson,
      mobileNumber,
      primaryEmail,
    } = validationResult;
    const files = req.files;

    let companyProfile = await Company.create({
      userId: req.userId,
      companyDescription,
      companyLogo: `companies/${files.companyLogo[0].filename}`,
      profileBanner: `companies/${files.profileBanner[0].filename}`,
      zipCode,
      streetAddress,
      primaryBusinessType,
      businessCategories,
      workingDays,
      alternateMobileNumber,
      alternateEmail,
      landlineNumber,
      faxNumber,
    });

    if (
      country &&
      state &&
      city &&
      companyName &&
      contactPerson &&
      mobileNumber &&
      primaryEmail
    ) {
      let user = await User.findOne({
        where: {
          id: req.userId,
        },
      });

      await user.update({
        country,
        state,
        city,
        company: companyName,
        name: contactPerson,
        phoneNumber: mobileNumber,
        email: primaryEmail,
      });
    }

    companyProfile
      ? res
          .status(HttpStatus.CREATED.code)
          .send(
            new Response(
              true,
              `General details added successfully`,
              companyProfile
            )
          )
      : res
          .status(HttpStatus.FORBIDDEN.code)
          .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createCompanyContactInfo = async (req, res) => {
  try {
    const validationResult = await companyInfoValidationSchema.validateAsync(
      req.body
    );
    const {
      yearOfEstablishment,
      ownershipType,
      majorMarket,
      termsOfDelivery,
      area,
      numberOfEmployees,
      numberOfProductLines,
      outputCapacity,
      outputCapacityUnit,
      averageLeadTime,
      averageLeadTimeUnit,
      gstNumber,
      panNumber,
      tanNumber,
      annualRevenue,
      exportPercentage,
      nearestPort,
    } = validationResult;
    let companyDetails = await Company.findOne({
      where: {
        userId: req.userId,
      },
    });
    if (!companyDetails) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, `General details not found`));
    }

    let companyContactInfo = await companyDetails.update({
      yearOfEstablishment,
      ownershipType,
      majorMarket,
      termsOfDelivery,
      area,
      numberOfEmployees,
      numberOfProductLines,
      outputCapacity,
      outputCapacityUnit,
      averageLeadTime,
      averageLeadTimeUnit,
      gstNumber,
      panNumber,
      tanNumber,
      annualRevenue,
      exportPercentage,
      nearestPort,
    });

    companyContactInfo
      ? res
          .status(HttpStatus.UPDATED.code)
          .send(
            new Response(
              true,
              `Contact info added successfully`,
              companyContactInfo
            )
          )
      : res
          .status(HttpStatus.FORBIDDEN.code)
          .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createCompanyCertification = async (req, res) => {
  try {
    const validationResult =
      await companyCertificationValidationSchema.validateAsync(req.body);
    const { name, certificateFile } = validationResult;
    console.log({ name: name });

    if (name == "undefined") {
      return res
        .status(HttpStatus.BAD_REQUEST.code)
        .send(new Response(false, `Name is required`));
    }
    let userId = req.userId;
    const comp = await Company.findOne({
      where: {
        userId,
      },
      attributes: ["id", "userId"],
    });

    if (!comp) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, `Company not found`));
    }

    let isCertification = await CompanyCertification.findOne({
      where: {
        companyId: comp.id,
      },
    });

    if (!isCertification) {
      const certification = await CompanyCertification.create({
        companyId: comp.id,
        name: name,
        certificateFile: `companies/${req.files.certificateFile[0].filename}`,
      });

      // give response
      certification
        ? res
            .status(HttpStatus.CREATED.code)
            .send(
              new Response(
                true,
                `Certification added successfully`,
                certification
              )
            )
        : res
            .status(HttpStatus.FORBIDDEN.code)
            .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
    } else {
      const certification = await isCertification.update({
        name: name,
        certificateFile: `companies/${req.files.certificateFile[0].filename}`,
      });

      // give response
      certification
        ? res
            .status(HttpStatus.UPDATED.code)
            .send(
              new Response(
                true,
                `Certification updated successfully`,
                certification
              )
            )
        : res
            .status(HttpStatus.FORBIDDEN.code)
            .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
    }
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createCompanyDocument = async (req, res) => {
  try {
    const validationResult =
      await companyDocumentValidationSchema.validateAsync(req.body);
    const { documentType, documentFile } = validationResult;

    let userId = req.userId;
    const comp = await Company.findOne({
      where: {
        userId,
      },
      attributes: ["id", "userId"],
    });

    if (!comp) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, `Company not found`));
    }

    let isCompLocation = await CompanyDocument.findOne({
      where: {
        companyId: comp.id,
        documentType: documentType,
      },
    });

    if (!isCompLocation) {
      const certification = await CompanyDocument.create({
        companyId: comp.id,
        documentType: documentType,
        documentFile: `companies/${req.files.documentFile[0].filename}`,
      });

      // give response
      certification
        ? res
            .status(HttpStatus.CREATED.code)
            .send(
              new Response(true, `Document added successfully`, certification)
            )
        : res
            .status(HttpStatus.FORBIDDEN.code)
            .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
    } else {
      const certification = await isCompLocation.update({
        documentFile: `companies/${req.files.documentFile[0].filename}`,
      });

      // give response
      certification
        ? res
            .status(HttpStatus.UPDATED.code)
            .send(
              new Response(true, `Document updated successfully`, certification)
            )
        : res
            .status(HttpStatus.FORBIDDEN.code)
            .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
    }
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createCompanyRegistration = async (req, res) => {
  try {
    const validationResult =
      await companyRegistrationValidationSchema.validateAsync(req.body);
    const {
      registrationLocation,
      registrationDate,
      registrationNumber,
      faxNumber,
    } = validationResult;

    let userId = req.userId;
    const comp = await Company.findOne({
      where: {
        userId,
      },
      attributes: ["id", "userId"],
    });

    if (!comp) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, `Company profile not found.`));
    }

    let isRegister = await CompanyRegistration.findOne({
      where: {
        companyId: comp.id,
      },
    });

    if (!isRegister) {
      const registration = await CompanyRegistration.create({
        companyId: comp.id,
        registrationLocation: registrationLocation,
        registrationDate: registrationDate,
        registrationNumber: registrationNumber,
        faxNumber: faxNumber,
      });

      // give response
      registration
        ? res
            .status(HttpStatus.CREATED.code)
            .send(
              new Response(
                true,
                `Registrations updated successfully`,
                registration
              )
            )
        : res
            .status(HttpStatus.FORBIDDEN.code)
            .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
    } else {
      const registration = await isRegister.update({
        registrationLocation: registrationLocation,
        registrationDate: registrationDate,
        registrationNumber: registrationNumber,
        faxNumber: faxNumber,
      });

      // give response
      registration
        ? res
            .status(HttpStatus.CREATED.code)
            .send(
              new Response(
                true,
                `Registrations details added successfully`,
                registration
              )
            )
        : res
            .status(HttpStatus.FORBIDDEN.code)
            .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
    }
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createCompanyLocation = async (req, res) => {
  try {
    const validationResult = await officeLocationValidationSchema.validateAsync(
      req.body
    );
    const { locationType, country, state, zipcode, streetAddress } =
      validationResult;

    let userId = req.userId;
    const comp = await Company.findOne({
      where: {
        userId,
      },
      attributes: ["id", "userId"],
    });

    if (!comp) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, `Company profile not found.`));
    }

    const companyId = comp.id;
    let isCompLocation = await CompanyOfficeLocation.findOne({
      where: {
        companyId,
      },
    });

    if (!isCompLocation) {
      let companyLocation = await CompanyOfficeLocation.create({
        companyId,
        locationType,
        country,
        state,
        zipcode,
        streetAddress,
      });

      companyLocation
        ? res
            .status(HttpStatus.CREATED.code)
            .send(
              new Response(
                true,
                `${locationType} added successfully`,
                companyLocation
              )
            )
        : res
            .status(HttpStatus.FORBIDDEN.code)
            .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
    } else {
      let companyLocation = await isCompLocation.update({
        locationType,
        country,
        state,
        zipcode,
        streetAddress,
      });

      companyLocation
        ? res
            .status(HttpStatus.CREATED.code)
            .send(
              new Response(
                true,
                `${locationType} Updated successfully`,
                companyLocation
              )
            )
        : res
            .status(HttpStatus.FORBIDDEN.code)
            .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
    }
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const getCompanyProfile = async (req, res) => {
  try {
    const { type } = req.query;
    if(!type){
      return res.status(HttpStatus.FORBIDDEN.code).send(new Response(false, `Type not found.`));
    }
    let userId = req.userId;
    let details;

    let comp = await Company.findOne({
      where: {
        userId,
      },
      attributes: ["id", "userId"],
    });

    if (type === "generalDetails" || type === "companyInfo") {

      details = await Company.findByPk(comp.id);

      // get profile register details
      let user = await User.findOne({
        where:{
          id: comp.userId
        },
        attributes: { exclude: ['password', 'userStatus', 'isVerified', 'loginOtp', 'accountActivatedAt', 'forgetPasswordToken', 'roles', 'terms'] }
      })

      details.setDataValue('user', user);

    } else if (type === "certification") {

      details = await CompanyCertification.findAll({
        where: {
          companyId: comp.id,
        },
      });

      // documents 
      let documents = await CompanyDocument.findAll({
        where: {
          companyId: comp.id,
        },
      });

      // registration details
      let registration = await CompanyRegistration.findOne({
        where: {
          companyId: comp.id,
        },
      });

      // set into details object
      details = {
        certifications: details,
        documents,
        registration,
      }

      
    }else if(type === "officeLocation"){
      details = await CompanyOfficeLocation.findAll({
        where: {
          companyId: comp.id,
        },
      });

    }

    // give response
    details
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, details))
      : res
          .status(HttpStatus.FORBIDDEN.code)
          .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const deleteCertificate = async(req,res)=>{
  try{
    let id = req.params.id;
    let userId = req.userId;

    let certificate = await CompanyCertification.findOne({
      where:{
        id:Number(id)
      }
    });

    if(!certificate){
      return res.status(HttpStatus.FORBIDDEN.code).send(new Response(false, `Certificate not found.`));
    }

    let deleteCertificate = await certificate.destroy();

    // give response
    deleteCertificate
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `Certificate deleted successfully`, deleteCertificate))
      : res
          .status(HttpStatus.FORBIDDEN.code)
          .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));

  }catch(error){
    return helpers.validationHandler(res, error);
  }
}

const createSubscription = async(req,res)=>{
  try {
      const validationResult = await userSubscriptionValidationSchema.validateAsync(req.body);
      const { subscriptionId } = validationResult;

      let subs = await Subscription.findOne({
          where: { id: subscriptionId }
      });

      if(!subs){
          return res.status(HttpStatus.FORBIDDEN.code).send(new Response(false, `Subscription not found.`));
      }

      let userSubs = await UserSubscription.findOne({
          where: { userId: req.userId }
      });

      if(userSubs){
          return res.status(HttpStatus.FORBIDDEN.code).send(new Response(false, `You already have a subscription.`));
      }

      const endDate = helpers.calculateEndDate(subs.duration);

      const subscription = await UserSubscription.create({
          userId: req.userId,
          subscriptionId,
          startDate: new Date(),
          endDate,
          status:"active"
      });

      res.status(HttpStatus.CREATED.code).send(
          new Response(true, "Subscription created successfully", subscription)
      );
      
  } catch(error) {
      return helpers.validationHandler(res, error);
  }
}

const getAllSubscription = async(req,res)=>{
  try {
      const subscriptions = await Subscription.findAll({
        attributes: ['id', 'name', 'price', 'duration', 'features'],
        where: {
          isActive: true
        },
        order: [['price', 'ASC']]
      });

      res.status(HttpStatus.OK.code).send(
          new Response(true, "Subscriptions retrieved successfully", subscriptions)
      );
      
  } catch(error) {
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
  createCompanyProfileGeneralDetail,
  createCompanyContactInfo,
  createCompanyCertification,
  createCompanyDocument,
  createCompanyRegistration,
  createCompanyLocation,
  getCompanyProfile,
  deleteCertificate,
  createSubscription,
  getAllSubscription,
};
