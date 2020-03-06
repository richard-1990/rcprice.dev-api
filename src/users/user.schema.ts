import * as Joi from '@hapi/joi';

const baseRules = {
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email(),
};

export default {
  POST: Joi.object({
    ...baseRules,
    firstName: baseRules.firstName.required(),
    lastName: baseRules.lastName.required(),
    email: baseRules.email.required(),
  }),
  PATCH: Joi.object({
    ...baseRules,
  }),
};
