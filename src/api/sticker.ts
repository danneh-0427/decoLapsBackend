import AppDataSource from "../data-source";
import Sticker from "../entity/Sticker";
import StickerObtain from "../entity/StickerObtain";
import User from "../entity/User";

const router = async (fastify, options) => {
  fastify.get('/sticker', async (req, reply) => {
    const stickerRepo = await AppDataSource.getRepository(Sticker);
    const stickers = await stickerRepo.find();
    return stickers;
  });
  
  fastify.post('/sticker', async (req, reply) => {
    if (
      req.body.creator === undefined ||
      req.body.name === undefined ||
      req.body.url === undefined ||
      req.body.price === undefined) {
      return { error: "Invalid query for POST /sticker: No enough data" };
    } else {
      const userRepo = await AppDataSource.getRepository(User);
      const user = await userRepo.findOneBy({ id: req.query.creator });
      if (user === null) {
        return { error: "Non-existing User info" };
      } else {
        const sticker = new Sticker();
        sticker.creator = user;
        sticker.name = req.body.name;
        sticker.url = req.body.url;
        sticker.price = req.body.price;
        await AppDataSource.getRepository(Sticker).save(sticker);
        return { msg: "Sticker POST done successfully" };
      }
    }
  });
  
  fastify.get('/sticker/obtain', async (req, reply) => {
    if (req.query.user === undefined) {
      return { error: "No user specified" };
    }
    const userRepo = await AppDataSource.getRepository(User);
    const user = await userRepo.findOne({
      where: { id: req.query.user },
      relations: ['obtainedStickers'],
    });
    if (user === null) {
      return { error: "Non-existing User info" };
    } else {
      const stickers = user.obtainedStickers;
      const response = await Promise.all(stickers.map(async (stickerIns) => {
        const stickerObj = await AppDataSource.getRepository(Sticker).findOne({ where: { id: stickerIns.stickerId } })
        console.log(stickerObj);
        return {
          sticker: stickerObj,
          obtaindAt: stickerIns.obtainedAt,
        }; 
      }));
      console.log(response);
      return response;
    }
  });
  
  fastify.post('/sticker/obtain', async (req, reply) => {
    if (
      req.body.user === undefined ||
      req.body.sticker === undefined
    ) {
      return { error: "Invalid query for POST /sticker/obtain: No enough data" };
    } else {
      const userRepo = await AppDataSource.getRepository(User);
      const user = await userRepo.findOne({
        where: { id: req.query.user },
        relations: ['obtainedStickers'],
      });
      const stickerRepo = await AppDataSource.getRepository(Sticker);
      const sticker = await stickerRepo.findOne({
        where: { id: req.query.sticker },
      });
      if (user === null) {
        return { error: "Non-existing User info" };
      }
      if (sticker === null) {
        return { error: "Non-existing Sticker info" };
      }
      const obsRepo = await AppDataSource.getRepository(StickerObtain);
      const obs = new StickerObtain();
      obs.user = user;
      obs.sticker = sticker;
      obsRepo.save(obs);
      return { msg: "Sticker obtain POST done successfully" };
    }
  })
};

export default router;
