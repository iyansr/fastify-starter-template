import { FastifyPluginCallback } from 'fastify';

import { authRoutes } from '../auth/auth.routes';
import { usersRoutes } from '../users/users.routes';

export const routesV1: FastifyPluginCallback = (server, opts, next) => {
  server.register(authRoutes, { prefix: 'auth' });
  server.register(usersRoutes, { prefix: 'users' });
  next();
};
