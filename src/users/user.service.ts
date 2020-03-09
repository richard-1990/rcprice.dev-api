import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>, // private readonly connection: Connection,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async update(id: string, user: User): Promise<User> {
    await this.usersRepository.update(id, user);
    return this.usersRepository.findOne(id);
  }

  async create(user: User): Promise<any> {
    try {
      return await this.usersRepository.save({ ...user });
    } catch (e) {
      return e;
    }
  }

  async delete(id: string): Promise<string> {
    await this.usersRepository.softDelete(id);
    return 'User successfully deleted';
  }
}
