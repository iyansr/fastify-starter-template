import { FastifyReply, FastifyRequest } from 'fastify';

import { ApiResponse } from '../utils/api-response';
import { LoginBody } from './auth.schema';
import { authService } from './auth.service';

export class AuthController {
  async login(request: FastifyRequest<{ Body: LoginBody }>, reply: FastifyReply) {
    const { email, password } = request.body;

    const user = await authService.login(email, password);

    return reply.status(200).send(new ApiResponse(200, 'Successfully logged in', user));
  }
}

export const authController = new AuthController();
