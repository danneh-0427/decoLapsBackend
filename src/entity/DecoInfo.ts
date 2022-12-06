import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne } from "typeorm";

import Deco from "./Deco";
import Sticker from "./Sticker";

@Entity()
export default class DecoInfo {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => Deco, (deco) => deco.decoInfo)
  deco: Deco;
  
  @OneToOne(() => Sticker)
  sticker: Sticker;
  
  @Column()
  xCoord: number;
  
  @Column()
  yCoord: number;
  
  @Column({ type: "float" })
  size: number;
}
