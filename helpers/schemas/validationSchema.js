const Joi = require("joi");

const validationSchema = Joi.object({
  name: Joi.string().min(1).max(25).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(5).max(15).required(),
});

module.exports = {
  validationSchema,
};
