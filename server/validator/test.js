const Joi = require("joi")


const test = data => {
    const schema = Joi.object({
        pro1 : Joi.string().required().messages({
            "string.base" : "pro1 should be a type of Text",
            "string.empty" : "pro1 cannot be an empty field",
            "string.required" : "pro1 is required field"
        }),
        pro2 : Joi.string().min(3).max(10).required().messages({
            "string.base" : "pro2 should be a type of Text",
            "string.required" : "pro2 is required field",
            "string.min" : "pro2 should have minimum length of {#limit}",
            "string.max" : "pro2 should have maximum length of {#limit}",
        })
    }).unknown(false).messages({
        "object.unknown" : "{#child} is not allowed"
    })
    
    return schema.validateAsync(data)
}

module.exports = {
    test
}