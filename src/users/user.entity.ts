import {
  Entity,
  Column,
  OneToMany,
  BaseEntity,
  Unique,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TimeStamps } from '../db/entity/timestamps.entity';
import { Post } from '../post/post.entity';

@Entity()
@Unique(['email'])
export class User extends TimeStamps {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @OneToMany(type => Post, post => post.user)
  posts: Post[];
}
