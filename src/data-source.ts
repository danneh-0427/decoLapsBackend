import "reflect-metadata";
import { DataSource } from "typeorm";

import { DB_USERNAME, DB_PASSWORD } from "./db-secrets";
import { User } from "./entity/User";
import { Sticker } from "./entity/Sticker";

export const AppDataSource = new DataSource({
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
    ],
    migrations: [],
    subscribers: [],
})
