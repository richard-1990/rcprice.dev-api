import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  postUser(@Body() user: any) {
    return this.usersService.create(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id): Promise<string> {
    return this.usersService.delete(id);
  }
}
