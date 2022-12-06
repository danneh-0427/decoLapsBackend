const router = async (fastify, options) => {
  fastify.get('/', async (req, reply) => {
    console.log("GET /");
    return { msg: "Hello, world!" };
  });
}

export default router;
