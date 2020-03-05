import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { schema as userSchema } from './user.schema';
import { JoiValidationPipe } from '../pipes/joi-validation.pipe';

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
  @UsePipes(new JoiValidationPipe(userSchema))
  postUser(@Body() user: any) {
    try {
      return this.usersService.create(user);
    } catch (e) {
      return 'shit';
    }
  }

  @Delete(':id')
  deleteUser(@Param('id') id): Promise<string> {
    return this.usersService.delete(id);
  }
}
