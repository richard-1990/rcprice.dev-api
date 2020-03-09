import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
  Unique,
} from 'typeorm';
import { TimeStamps } from '../db/entity/timestamps.entity';

@Entity()
@Unique(['email'])
export class User extends TimeStamps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;
}
