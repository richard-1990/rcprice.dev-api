import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';

describe('Users Controller', () => {
  let usersController: UsersController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UserService],
    }).compile();

    userService = moduleRef.get<UserService>(UserService);
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });
});
