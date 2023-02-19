const Joi = require("joi");

const userSingUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).required(),
  subscription: Joi.string().valid('starter', 'pro', 'business')
});

module.exports = {
  userSingUpSchema,
};
