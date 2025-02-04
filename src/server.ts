import fastify from 'fastify';

export const createServer = async () => {
  const server = fastify();

  server.get('/ping', async (_request, reply) => {
    return reply.send({
      message: 'Pong'
    });
  });

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

  return server;
};
