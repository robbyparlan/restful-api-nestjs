import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ApiPrefixVersion, SwaggerPrefix } from './common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CustomException } from './common/exception/custom.exception';
import { ConfigService } from '@nestjs/config';
import { Log4jsService } from './common/services/logger.service';

const configService = new ConfigService();
async function bootstrap() {
  const logger = new Log4jsService();
  const app = await NestFactory.create(AppModule, {logger});

  app.enableCors();
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.useGlobalPipes(
    new ValidationPipe({
        whitelist: true,
        transform: true,
    }),
);

  app.useGlobalFilters(new CustomException());
  app.setGlobalPrefix(ApiPrefixVersion.v1);

      // Swagger setup
      const options = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('NESTJS OPENAPI Services')
      .setDescription('API for Services')
      .setVersion('1.0')
      .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(ApiPrefixVersion.v1.concat(SwaggerPrefix.v1), app, document);

  const port =  configService
  .getOrThrow('APP_PORT')

    await app.listen(port, () => {
        Logger.log(`App running on port ${port}`);
    });
}
bootstrap();
