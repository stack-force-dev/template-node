import dotenv from "dotenv"
import Joi from "joi"

import { Env } from "@interfaces/env"

dotenv.config()

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid(Env.Production, Env.Development, Env.Test).default(Env.Development),
  PORT: Joi.number().default(3000).description("App Port"),

  PSQL_HOST: Joi.string().default("localhost").description("Database Host"),
  PSQL_DATABASE: Joi.string().default("database").description("Database Name"),
  PSQL_USER: Joi.string().default("root").description("Database User"),
  PSQL_PASSWORD: Joi.string().allow("").default("root").description("Database Password")
})

const { error, value: envVars } = envVarsSchema.validate(process.env)
if (error) new Error(`Config validation error: ${error.message}`)

export const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,

  psqlHost: envVars.PSQL_HOST,
  psqlDatabase: envVars.PSQL_DATABASE,
  psqlUsername: envVars.PSQL_USER,
  psqlPassword: envVars.PSQL_PASSWORD
}
