import "reflect-metadata";
import { DataSource } from "typeorm";

import { DB_USERNAME, DB_PASSWORD } from "./db-secrets";
import User from "./entity/User";
import Sticker from "./entity/Sticker";
import Deco from "./entity/Deco";
import DecoInfo from "./entity/DecoInfo";
import DecoProfile from "./entity/DecoProfile";
import StickerObtain from "./entity/StickerObtain";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "test",
    synchronize: true,
    logging: false,
    entities: [
        User,
        Sticker,
        Deco,
        DecoInfo,
        DecoProfile,
        StickerObtain,
    ],
    migrations: [],
    subscribers: [],
})

export default AppDataSource;