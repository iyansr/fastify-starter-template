import { FastifyInstance, FastifyRequest } from 'fastify';

import { ApiError } from './modules/utils/api-error';
import { verifyJwt } from './modules/utils/jwt';

export async function decorate(server: FastifyInstance) {
  server.decorate('verifyJwt', async (request: FastifyRequest) => {
    try {
      const authorization = request.headers.authorization;
      const token = authorization?.split('Bearer ')[1];

      if (!token) {
        throw new ApiError(401, 'Unauthorized Signature', {});
      }

      const decoded = await verifyJwt<{ userId: string }>(token);

      if (!decoded) {
        throw new ApiError(401, 'Unauthorized Signature', {});
      }

      request.userId = decoded.userId;
    } catch (_error) {
      throw new ApiError(401, 'Unauthorized Signature', {});
    }
  });
}
