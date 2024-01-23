import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { TestingController } from './testing.controller';
import { TestingService } from '../service/testing.service';
import { CreateUserDto } from '../dtos/createUser.dtos';

const createUserDto: CreateUserDto = {
  username: 'test',
  fullname: 'testing',
  password: 'test123',
  address: 'test',
  phone: '021',
  email: 'test@gmail.com',
}

describe('AppController', () => {
  let appController: TestingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TestingController],
      providers: [{
        provide: TestingService,
        useValue: {
          create: jest.fn(() => of([createUserDto]))
        }
      }],
    }).compile();

    appController = app.get<TestingController>(TestingController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

});
