import fastify from 'fastify';
import dotenv from 'dotenv';

import AppDataSource from './data-source';
import router from './api';

import User from "./entity/User";

dotenv.config();
AppDataSource.initialize().then(async () => {
  const server = fastify();

  server.register(router);

  server.listen({ port: 8000 }, (err, address) => {
    if (err) throw err;
    
    server.log.info(`server listening on ${address}`);
  });
});
