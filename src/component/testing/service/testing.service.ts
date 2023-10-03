import { BadRequestException, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { EntityManager, Like, Not, Repository, Timestamp, DataSource } from 'typeorm';
import { UserEntity } from '../entity/user.entity'
import { CreateUserDto } from '../dtos/createUser.dtos';
import { ServiceResponse } from '../../../common/response/service.response';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TestingService {
  constructor (
    @InjectDataSource()
    private dataSource: DataSource,
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getUser(): Promise<object> {
    return [
      {
        id: 1,
        username: 'john'
      },
      {
        id: 2,
        username: 'doe'
      }
    ]
  }

  async createUser(createUserDto: CreateUserDto): Promise<ServiceResponse> {
    const trx = this.dataSource.createQueryRunner();
    await trx.connect();
    try {
      await trx.startTransaction();
      const salt = await bcrypt.genSalt();
      createUserDto.password = await bcrypt.hash(createUserDto.password, salt);

      let create = await this.userEntity.create(createUserDto)
      
      await trx.manager.save(create);
      
      let response: ServiceResponse = {
        success: true,
        message: 'Data Berhasil disimpan'
      }
      await trx.commitTransaction();
      return response
    } catch (error) {
      await trx.rollbackTransaction();
      throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } finally {
      await trx.release();
    }
  }
}
