import { FastifyReply, FastifyRequest } from 'fastify';

import { ApiResponse } from '../utils/api-response';
import { usersService } from './users.service';

export class UsersController {
  async getUserById(request: FastifyRequest, reply: FastifyReply) {
    const userId = request.userId;
    const user = await usersService.getUserById(userId);

    return reply.status(200).send(new ApiResponse(200, 'Successfully fetched user', user));
  }
}

export const usersController = new UsersController();
