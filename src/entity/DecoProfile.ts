import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import User from './User';

@Entity()
export default class DecoProfile {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;
}
  