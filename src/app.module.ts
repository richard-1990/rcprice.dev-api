import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
