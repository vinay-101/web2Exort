const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../../models/user/User')
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
} = require("../../validators/user.validator");
const {
    HttpStatus,
    CustomMessages,
} = require("../../helper/statusCode");
const Response = require("../../helper/response");




const createJWT = (user) => {
    return jwt.sign(user, process.env.SECRETKEY, {
        expiresIn: "7d",
    });
};

const signUpUser = async (req, res) => {
    try {
        const validationResult = await signupValidation.validateAsync(req.body);
        var { name, email, mobile_number, password, confirm_password } = validationResult;
        if (password && confirm_password) {
            if (password !== confirm_password) {
                return res
                    .status(HttpStatus.BAD_REQUEST.code)
                    .send(
                        new Response(false, `Password And Confirm Password Should Be Match `)
                    );
            }
        };
        let hashPassword;
        if (password) {
            const salt = await bcrypt.genSalt();
            hashPassword = await bcrypt.hash(password, salt);
        }
        const user = await User.create({
            name,
            email,
            phoneNumber: mobile_number,
            // isVerified: true,
            password: hashPassword
        });

        res.status(HttpStatus.CREATED.code).send(new Response(true, `USER ${HttpStatus.CREATED.message}`, user));
    } catch (error) {
        return helpers.validationHandler(res, error);
    }
};





const userLogin = async (req, res) => {
    try {
        const { password, email = "" } = req.body;
        if (password && email) {
            const user = await User.findOne({
                where: {
                    email: email
                }
            });

            if (!user) {
                return res.status(HttpStatus.FORBIDDEN.code)
                    .send(new Response(false, "This account has not registered yet. Please register yourself"))
            }

            if (user.userStatus === "Banned") {
                return res.status(HttpStatus.FORBIDDEN.code)
                    .send(new Response(false, "Your account has been banned, please contact admin"))
            }


            if (user) {
                if (!user.isVerified) {
                    return res
                        .status(HttpStatus.UNAUTHORIZED.code)
                        .send(
                            new Response(false, CustomMessages.MESSAGE.accountNotVerified)
                        );
                }
                const auth = await bcrypt.compare(password, user.password);
                if (auth) {
                    const jwtuser = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        mobile_number: user.phoneNumber,
                        accountActivatedAt: user.accountActivatedAt
                    };
                    const token = createJWT(jwtuser);

                    return res
                        .status(HttpStatus.OK.code)
                        .send(
                            new Response(
                                true,
                                `USER ${CustomMessages.MESSAGE.loginSuccess}`,
                                { user: user, access_token: token }
                            )
                        );
                }

                return res
                    .status(HttpStatus.UNAUTHORIZED.code)
                    .send(
                        new Response(false, `${CustomMessages.MESSAGE.inValid} PASSWORD`)
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
            .send(new Response(false, `USER ${HttpStatus.NOT_FOUND.message}`));
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
                email: identity
            }
        });


        if (user) {

            otp = await helpers.sendOtp();

            if (otp) {
                user.loginOtp = otp;
                await user.save();

                let mailOptions = {
                    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
                    to: user.email,
                    subject: "Please Activate Your Account",
                    template: "account_verification",
                    context: {
                        name: user.name,
                        OTP: otp

                    },
                };
                await helpers.sendEmail(mailOptions);
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


const LoginVerifyOtp = async (req, res) => {
    const { identity, otp } = req.body;
    try {
        if (identity && otp) {
            const user = await User.findOne({
                where: {
                    email: identity
                }
            });

            if (user) {

                if (otp == user.loginOtp) {

                    if (user.userStatus === "Banned") {
                        return res.status(HttpStatus.FORBIDDEN.code)
                            .send(new Response(false, "Your account has been banned, please contact admin"))
                    }

                    user.isVerified = true;
                    user.accountActivatedAt = new Date();
                    await user.save();
                    return res
                        .status(HttpStatus.OK.code)
                        .send(new Response(true, CustomMessages.MESSAGE.emailVerifiedSuccessfully));

                }

                return res
                    .status(HttpStatus.UNAUTHORIZED.code)
                    .send(new Response(false, `${CustomMessages.MESSAGE.inValid} OTP`));
            }
        } else {
            return res
                .status(HttpStatus.BAD_REQUEST.code)
                .send(
                    new Response(false, `PLEASE ENTER EMAIL AND OTP`)
                );
        }
    } catch (e) {
        console.log(e)
        res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
            .send(new Response(false, e.message));
    }
}


const forgetPasswordSendOtp = async (req, res) => {
    const { identity } = req.body;

    if (identity) {
        const user = await User.findOne({
            where: {
                email: identity
            },
        });

        if (user) {
            if (!user.isVerified) {
                return res
                    .status(HttpStatus.UNAUTHORIZED.code)
                    .send(new Response(false, CustomMessages.MESSAGE.accountNotVerified));
            }

            otp = await helpers.sendOtp();
            if (otp) {
                user.loginOtp = otp;
                user.forgetPasswordToken = uuid();
                await user.save();
                let mailOptions = {
                    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
                    to: user.email,
                    subject: "Password Reset Request",
                    template: "forgot_password",
                    context: {
                        name: user.name,
                        OTP: otp

                    },
                };
                await helpers.sendEmail(mailOptions);

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
                    email: identity
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
                                `OTP VERIFIED SUCCESSFULLY`,
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
                    .send(new Response(false, `USER ${HttpStatus.NOT_FOUND.message}`));
            }
        } else {
            return res
                .status(HttpStatus.BAD_REQUEST.code)
                .send(new Response(false, `EMAIL AND OTP REQUIRED`));
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
                        new Response(false, `PASSWORD & CONFIRM PASSWORD SHOULD BE MATCH`)
                    );
            }
            const user = await User.findOne({
                where: {
                    forgetPasswordToken: forget_password_token,
                }
            });

            if (user) {
                const isSamePassword = await bcrypt.compare(password, user.password);
                if (isSamePassword) {
                    return res.status(400).send(new Response(false, "OLD PASSWORD AND NEW PASSWORD CANNOT BE SAME"))
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
                        .send(new Response(true, `PASSWORD ${HttpStatus.UPDATED.message}`));
                }
            } else {
                return res
                    .status(HttpStatus.BAD_REQUEST.code)
                    .send(new Response(false, `WRONG TOKEN`));
            }
        } else {
            return res
                .status(HttpStatus.BAD_REQUEST.code)
                .send(
                    new Response(false, `PLEASE ENTER PASSWORD AND CONFIRM PASSWORD BOTH`)
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
                id: req.profileActive,
            },
            attributes: ['id', 'name', 'email', 'phoneNumber', 'isVerified', 'accountActivatedAt', 'profileImage']
        });



        user ? res
            .status(HttpStatus.OK.code)
            .send(new Response(true, `${HttpStatus.OK.message}`, user))
            : res
                .status(HttpStatus.OK.code)
                .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));


    } catch (error) {
        return helpers.validationHandler(res, error);
    }
}

const updateProfile = async (req, res) => {
    try {
        const validationResult = await updateProfileValidator.validateAsync(req.body);
        let { name, email, mobile_number } = validationResult;

        let user = await User.findOne({
            where: {
                id: req.profileActive
            }
        });

        let updatedUser;
        if (req.files.profile_img) {
            console.log("786");
            let profileImage = `users/${req.files.profile_img[0].filename}`
            updatedUser = user.update({ name, email, phoneNumber: mobile_number, profileImage: profileImage })

        } else {
            updatedUser = user.update({ name, email, phoneNumber: mobile_number })
        }


        updatedUser ? res
            .status(HttpStatus.UPDATED.code)
            .send(new Response(true, `${HttpStatus.UPDATED.message}`, user))
            : res
                .status(HttpStatus.OK.code)
                .send(new Response(false, `${HttpStatus.FORBIDDEN.message}`));


    } catch (error) {
        return helpers.validationHandler(res, error);
    }
}




module.exports = {
    signUpUser, userLogin, LoginSendOtp, LoginVerifyOtp, forgetPasswordSendOtp, forgetPasswordVerifyOtp, resetForgetPassword, getProfile, updateProfile
}