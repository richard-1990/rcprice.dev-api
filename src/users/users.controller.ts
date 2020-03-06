import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  UsePipes,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import userSchema from './user.schema';
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
  @UsePipes(new JoiValidationPipe(userSchema.POST))
  postUser(@Body() user: any) {
    try {
      return this.usersService.create(user);
    } catch (e) {
      return 'shit';
    }
  }

  @Patch(':id')
  @UsePipes(new JoiValidationPipe(userSchema.PATCH))
  patchUser(@Body() user: any, @Param('id') id) {
    console.log('eer?');
    try {
      return this.usersService.update(id, user);
    } catch (e) {
      return 'shit';
    }
  }

  @Delete(':id')
  deleteUser(@Param('id') id): Promise<string> {
    return this.usersService.delete(id);
  }
}
