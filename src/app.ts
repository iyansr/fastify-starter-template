import { createServer } from './server';

declare module 'fastify' {
  //   interface FastifyRequest {
  //        Add Request Interface Here
  //   }
  //
  //   interface FastifyInstance {
  //        Add Instance Interface Here
  //   }
}

const run = async () => {
  try {
    const server = await createServer();

    await server.listen({ port: 8000, host: '0.0.0.0' });
    console.log(`🚀 Server running on port 8000`);
  } catch (error) {
    console.error(`❌❌❌ Server stopped due to error`);
    console.error(`server error ${error}`);
    process.exit(1);
  }
};

run();
