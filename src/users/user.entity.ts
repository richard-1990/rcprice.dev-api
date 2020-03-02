import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TimeStamps } from '../db/entity/timestamps.entity';

@Entity()
export class User extends TimeStamps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
