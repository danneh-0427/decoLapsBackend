import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, Column } from "typeorm";

import Sticker from "./Sticker";
import User from "./User";

@Entity()
export default class StickerObtain {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sticker)
  @JoinColumn()
  sticker: Sticker;
  
  @Column()
  stickerId: number;
  
  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
  
  @Column()
  userId: number;
  
  @CreateDateColumn()
  obtainedAt: Date;
}
