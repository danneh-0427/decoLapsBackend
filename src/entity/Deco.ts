import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

import DecoInfo from "./DecoInfo";

@Entity()
export default class Deco {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => DecoInfo, (decoInfo) => decoInfo.deco)
  decoInfo: DecoInfo;
}
