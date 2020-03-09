import * as Joi from '@hapi/joi';

const baseRules = {
  title: Joi.string(),
  body: Joi.string(),
};

export default {
  POST: Joi.object({
    ...baseRules,
    title: baseRules.title.required(),
    body: baseRules.body.required(),
  }),
  PATCH: Joi.object({
    ...baseRules,
  }),
};
