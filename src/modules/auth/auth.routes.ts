import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

import { authController } from './auth.controller';
import { loginBodySchema } from './auth.schema';

export function authRoutes(server: FastifyInstance) {
  server.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/login',
    schema: loginBodySchema,
    handler: authController.login
  });
}
