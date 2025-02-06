import fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';

import { decorate } from './decorator';
import { routesV1 } from './modules/routes/routes.v1';

export const createServer = async () => {
  const server = fastify();

  await decorate(server);

  server.get('/ping', async (_request, reply) => {
    return reply.send({
      message: 'Pong'
    });
  });

  server.setValidatorCompiler(validatorCompiler);
  server.setSerializerCompiler(serializerCompiler);

  const currentDateOpt: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const BUILD_DATE = new Date().toLocaleDateString('en-ID', currentDateOpt);

  server.get('/healthcheck', async (_req, _res) => {
    return {
      status: `OK`,
      build_date: BUILD_DATE,
      version: '1.0.0'
    };
  });

  server.register(routesV1, { prefix: 'api/v1' });

  return server;
};
