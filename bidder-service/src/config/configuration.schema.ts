import * as Joi from '@hapi/joi';

export const configurationSchema = Joi.object({
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_PORT: Joi.number().default(5432),
  POSTGRES_DB: Joi.string().required(),
  APP_HOST: Joi.string().required(),
  APP_PORT: Joi.number().required(),
  APP_GRPC_URL: Joi.string().required(),
  AUCTION_SERVICE_GRPC_URL: Joi.string().required(),
});
