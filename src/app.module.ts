import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { UsersModule } from './users/user.module';
import { UsersHttpModule } from './users-http/users-http.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, UsersHttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
