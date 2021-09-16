const Joi = require("joi")

// schema
const registerSchema = Joi.object({
    email : Joi.string().email().trim().lowercase().required().messages({
        "any.required" : "Email is required field",
        "string.email" : "{#invalids} is not an Email",
        "string.empty" : "Email should not be empty"
    }),
    nickName : Joi.string().trim().min(6).max(20).required().messages({
        "any.required" : "Nick name is required field",
        "string.empty" : "Nick name should not be empty",
        "string.base" : "Nick name should be type of text",
        "string.min" : "Nick name should have minimum length of {#limit}",
        "string.max" : "Nick name should have maximum length of {#limit}",
    }),
    password : Joi.string().trim().min(6).lowercase().required().messages({
        "any.required" : "Password is required field",
        "string.empty" : "Password should not be empty",
        "string.base" : "Password should be type of text",
        "string.min" : "Password should have minimum length of {#limit}",
    }),
    confirmPassword : Joi.string().trim().min(6).lowercase().required().valid(Joi.ref("password")).messages({
        "any.required" : "Confirm password is required field",
        "string.empty" : "Confirm password should not be empty",
        "string.base" : "Confirm password should be type of text",
        "string.min" : "Confirm password should have minimum length of {#limit}",
        "any.only" : "Confirm password should match password"
    }),
})
.unknown(false)
.messages({
    "object.unknown" : "{#child} is not allowed"
})







const registerValidator = data => registerSchema.validateAsync(data)

module.exports = {
    registerValidator
}