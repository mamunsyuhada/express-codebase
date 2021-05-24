const Joi = require('joi');

const RegisterSchema = Joi.object({
    username: Joi.string().required().lowercase().min(4),
    fullname: Joi.string().required().empty(false),
    email: Joi.string().required().lowercase().empty(false).email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6)
});

const LoginSchema = Joi.object({
    email: Joi.string().required().lowercase(),
    password: Joi.string().required().min(6)
});

module.exports = {
    RegisterSchema,
    LoginSchema
}