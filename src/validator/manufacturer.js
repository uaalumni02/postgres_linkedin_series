const Joi = require("@hapi/joi");

const schema = Joi.object({
  manufacturer: Joi.string()
    .regex(/^[a-zA-Z]+$/i)
    .min(3)
    .max(10)
    .required(),
});

export default schema;
