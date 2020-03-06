import { Injectable } from '@nestjs/common';
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

  update(id: string, user: User): Promise<User> {
    console.log('here');
    const existingUser = this.usersRepository.findOne(id);
    console.log(existingUser);
    return existingUser;
  }

  async create(user: User): Promise<any> {
    return this.usersRepository.save({ ...user });
  }

  async delete(id: string): Promise<string> {
    await this.usersRepository.softDelete(id);
    return 'User successfully deleted';
  }

  // async createMany(users: User[]) {
  //   await this.connection.transaction(async manager => {
  //     await manager.save(users[0]);
  //     await manager.save(users[1]);
  //   });
  // }
}
