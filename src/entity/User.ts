import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import DecoProfile from "./DecoProfile";
import Sticker from "./Sticker";

@Entity()
export default class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;
  
  @Column()
  githubUserCode: string;
  
  @Column()
  walletId: string;
  
  @OneToMany(() => DecoProfile, (profiles) => profiles.user)
  profiles: DecoProfile[];
  
  @OneToMany(() => Sticker, (createdStickers) => createdStickers.creator)
  createdStickers: Sticker[];
}
