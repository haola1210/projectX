const Joi = require("joi")

const { 
    emailValidator, 
    nickNameValidator, 
    passwordValidator, 
    confirmPasswordValidator 
} = require("./fieldsValidator")


// schema define
const registerSchema = Joi.object({
    email : emailValidator,
    nickName : nickNameValidator,
    password : passwordValidator,
    confirmPassword : confirmPasswordValidator
})
.unknown(false)
.messages({
    "object.unknown" : "{#child} không được phép gửi lên"
})

const loginSchema = Joi.object({
    email : emailValidator,
    password : passwordValidator,
})
.unknown(false)
.messages({
    "object.unknown" : "{#child} không được phép gửi lên"
})


const registerValidator = data => registerSchema.validateAsync(data)
const loginValidator = data => loginSchema.validateAsync(data)

module.exports = {
    registerValidator,
    loginValidator
}