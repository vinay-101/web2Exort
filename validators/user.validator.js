const Joi = require("joi");
const { CustomMessages } = require("../helper/statusCode");
// const { joi } = require("joi-sequelize/lib/functions");

const signupValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    mobile_number: Joi.string().required(),
    confirm_password: Joi.valid(Joi.ref("password")).required().error(new Error("PASSWORD AND CONFIRM PASSWORD SHOULD BE MATCH.")),
   
});

const completeProfileValidation = Joi.object({
    about: Joi.string().required(),
    mobile_number: Joi.string().required(),
    facebook_url: Joi.string().optional(),
    linkedin_url: Joi.string().optional(),
    twitter_url: Joi.string().optional(),
    website: Joi.string().required(),
    userId:Joi.number().integer().required(),
});


const forgetPasswordValidation = Joi.object({
    password: Joi.string().required(),
    confirm_password: Joi.valid(Joi.ref("password")).required().error(new Error("PASSWORD AND CONFIRM PASSWORD SHOULD BE MATCH.")),
    forget_password_token: Joi.string().required()
})

let changePasswordValidation = Joi.object({
    password: Joi.string().required(),
    confirm_password: Joi.valid(Joi.ref("password")).required().error(new Error("PASSWORD AND CONFIRM PASSWORD SHOULD BE MATCH.")),
    current_password: Joi.string().required()
})


const updateProfileValidator = Joi.object({
    email:Joi.string().optional().email(),
    mobile_number: Joi.string().optional(),
    name: Joi.string().optional(),
});

module.exports = {
    signupValidation, 
    completeProfileValidation,
    forgetPasswordValidation,
    changePasswordValidation,
    updateProfileValidator,
};
