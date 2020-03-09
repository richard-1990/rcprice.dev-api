import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { TimeStamps } from '../db/entity/timestamps.entity';
import { User } from '../users/user.entity';

@Entity()
export class Post extends TimeStamps {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @ManyToOne(type => User, user => user.posts)
  user: User;
}
