import fastify from 'fastify';
import dotenv from 'dotenv';

import router from './api';

dotenv.config();

const server = fastify();

server.register(router);

server.listen({ port: 8000 }, (err, address) => {
  if (err) throw err;
  server.log.info(`server listening on ${address}`);
});
