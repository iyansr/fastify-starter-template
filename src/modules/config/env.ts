import dotenv from '@dotenvx/dotenvx';
import { z } from 'zod';

dotenv.config({ path: `.env` });

const envVars = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().default(8000),
  JWT_SECRET: z.string().min(1),
  JWT_EXPIRES_IN: z.string().min(1),
  REFRESH_TOKEN_SECRET: z.string().min(1),
  REFRESH_TOKEN_EXPIRES_IN: z.string().min(1)
});

const parsedEnv = envVars.parse(process.env);

export const env = {
  env: parsedEnv.NODE_ENV,
  port: parsedEnv.PORT,
  jwt: {
    secret: parsedEnv.JWT_SECRET,
    expiresIn: parsedEnv.JWT_EXPIRES_IN,
    refreshTokenSecret: parsedEnv.REFRESH_TOKEN_SECRET,
    refreshTokenExpiresIn: parsedEnv.REFRESH_TOKEN_EXPIRES_IN
  }
};
