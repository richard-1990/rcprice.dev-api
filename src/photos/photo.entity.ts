import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TimeStamps } from '../db/entity/timestamps.entity';

@Entity()
export class Photo extends TimeStamps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
