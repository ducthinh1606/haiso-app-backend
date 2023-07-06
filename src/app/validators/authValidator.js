const Joi = require('joi');

const registerValidation = Joi.object({
  name: Joi.string().alphanum().min(6).required().messages({
    'string.alphanum': 'Name must only contain alphanumeric characters',
    'string.min': 'Name must be at least 6 characters long',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'any.required': 'Password is required',
  }),
  passwordConfirm: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Password confirmation does not match',
    'any.required': 'Password confirmation is required',
  }),
  tel: Joi.string().alphanum().min(10).required().messages({
    'string.alphanum': 'Telephone must only contain alphanumeric characters',
    'string.min': 'Telephone must be at least 10 characters long',
    'any.required': 'Telephone is required',
  }),
  address: Joi.string().allow('').optional()
});

const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
  'string.email': 'Invalid email',
  'any.required': 'Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'any.required': 'Password is required',
  }),
});

module.exports = {
  registerValidation,
  loginValidation,
};
