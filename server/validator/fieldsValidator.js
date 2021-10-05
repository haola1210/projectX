const Joi = require("joi")

//predefine validate fields
const emailValidator = Joi.string().email().trim().lowercase().required().messages({
    "any.required" : "Email không được bỏ trống",
    "string.base" : "Email phải là dạng chữ",
    "string.email" : "{#invalids} không đúng định dạng email",
    "string.empty" : "Email không được rỗng"
})

const nickNameValidator = Joi.string().trim().min(6).max(20).required().messages({
    "any.required" : "Nick name không được bỏ trống",
    "string.empty" : "Nick name không được rỗng",
    "string.base" : "Nick name phải là dạng chữ",
    "string.min" : "Nick name phải có ít nhất {#limit} kí tự",
    "string.max" : "Nick name phải ngắn hơn {#limit} kí tự",
})

const passwordValidator = Joi.string().trim().min(6).lowercase().required().messages({
    "any.required" : "Password không được bỏ trống",
    "string.empty" : "Password không được rỗng",
    "string.base" : "Password phải là dạng chữ",
    "string.min" : "Password phải có ít nhất {#limit} kí tự",
})

const confirmPasswordValidator = Joi.string().trim().min(6).lowercase().required()
.valid(Joi.ref("password")).messages({
    "any.required" : "Confirm password không được bỏ trống",
    "string.empty" : "Confirm password không được rỗng",
    "string.base" : "Confirm password phải là dạng chữ",
    "string.min" : "Confirm password phải có ít nhất {#limit} kí tự",
    "any.only" : "Confirm password phải giống password"
})

module.exports = {
    emailValidator, 
    passwordValidator, 
    nickNameValidator,
    confirmPasswordValidator, 
}