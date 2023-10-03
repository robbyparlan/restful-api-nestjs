import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TestingModule } from './component/testing/testing.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnv, Config } from './common';
import { DatabaseModule } from './common/infra/database/database.module';
import { LoggerMiddleware } from './middlewares';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: Config.ENV_API_PATH,  
      validate: validateEnv
    }),
    DatabaseModule,
    TestingModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
