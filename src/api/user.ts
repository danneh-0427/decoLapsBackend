import AppDataSource from "../data-source";
import User from "../entity/User";

const router = async (fastify, options) => {
  fastify.get('/user', async (req, reply) => {
    const userRepo = await AppDataSource.getRepository(User);
    if (req.query.id === undefined) {
      return await userRepo.find();
    } else {
      return await userRepo.findOne({where: {id: req.query.id}});
    }
  });
  
  fastify.post('/user', async (req, reply) => {
    if (
      req.body.nickname === undefined ||
      req.body.githubUserCode === undefined
    ) {
      return { error: "Invalid query for POST /sticker/obtain: No enough data" };
    }
    const userRepo = await AppDataSource.getRepository(User);
    const user = new User();
    user.nickname = req.body.nickname;
    user.githubUserCode = req.body.githubUserCode;
    await userRepo.save(user);
    return { msg: "user POST done successfully" };
  })
}

export default router;