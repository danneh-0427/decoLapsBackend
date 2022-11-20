import fastify from 'fastify';

const server = fastify();

server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

server.listen({ port: 8000 }, function (err, address) {
  if (err) throw err;
  server.log.info(`server listening on ${address}`);
});