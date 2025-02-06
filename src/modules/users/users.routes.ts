import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

import { usersController } from './users.controller';

export function usersRoutes(server: FastifyInstance) {
  server.withTypeProvider<ZodTypeProvider>().route({
    method: 'GET',
    url: '/me',
    preHandler: [server.verifyJwt],
    handler: usersController.getUserById
  });
}
