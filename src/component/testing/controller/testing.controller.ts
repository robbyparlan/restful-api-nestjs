import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TestingService } from '../service/testing.service';
import { CreateUserDto } from '../dtos/createUser.dtos';
import { ApiResponse } from '../../../common/response/api.response';

@Controller()
export class TestingController {
  constructor(private readonly testingService: TestingService) {}

  @Get()
  getHello(): string {
    return this.testingService.getHello();
  }

  @Get('/user/:id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<object> {
    return this.testingService.getUser();
  }

  @Post('/user/create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log(`payload : `, createUserDto);
    const createdUser = await this.testingService.createUser(createUserDto);
    if (!createdUser.success) {
      return ApiResponse.error(createdUser.success, createdUser.message);
    }
    return ApiResponse.success(createdUser.success, createdUser.message);
  }
}
