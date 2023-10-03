import { Module } from '@nestjs/common';
import { TestingController } from './controller/testing.controller';
import { TestingService } from './service/testing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity
  ])
  ],
  controllers: [TestingController],
  providers: [TestingService],
})
export class TestingModule {}
