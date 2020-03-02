import { Module } from '@nestjs/common';
import { UsersModule } from './user.module';
import { UserService } from './user.service';
import { UsersController } from './users.controller';

@Module({
  imports: [UsersModule],
  providers: [UserService],
  controllers: [UsersController],
})
export class UsersHttpModule {}
