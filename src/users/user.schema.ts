import * as Joi from '@hapi/joi';

export const schema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email(),
});

function getSchemaForPUT() {
  return schema;
}

function getSchemaForPATCH() {
  return schema;
}
