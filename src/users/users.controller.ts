import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} user`;
  }

  @Post()
  postUser(@Body() user: any) {
    return this.usersService.create(user);
  }
}
