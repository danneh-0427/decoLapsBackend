import sticker from "./sticker";
import user from "./user";

const router = async (fastify, options) => {
  fastify.get('/', async (req, reply) => {
    console.log("GET /");
    return { msg: "Hello, world!" };
  });
  
  fastify.register(sticker);
  fastify.register(user);
}

export default router;
