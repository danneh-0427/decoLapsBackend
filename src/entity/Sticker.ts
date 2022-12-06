import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToOne } from "typeorm";

import User from "./User";

@Entity()
export default class Sticker {

  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => User, (creator) => creator.createdStickers)
  creator: User;

  @Column()
  name: string;
  
  @Column()
  url: string;
  
  @Column({ type: "float" })
  price: number;
}
