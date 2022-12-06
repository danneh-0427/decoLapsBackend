import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import DecoProfile from "./DecoProfile";
import Sticker from "./Sticker";
import StickerObtain from "./StickerObtain";

@Entity()
export default class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;
  
  @Column()
  githubUserCode: string;
  
  @Column()
  walletId?: string;
  
  @OneToMany(() => DecoProfile, (profiles) => profiles.user)
  profiles: DecoProfile[];
  
  @OneToMany(() => StickerObtain, (obtainedStickers) => obtainedStickers.user)
  obtainedStickers: StickerObtain[];
  
  @OneToMany(() => Sticker, (createdStickers) => createdStickers.creator)
  createdStickers: Sticker[];
}
