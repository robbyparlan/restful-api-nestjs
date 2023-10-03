import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Log4jsService } from 'src/common/services/logger.service';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('LoggerMiddleware')

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`-----------------Request : ${req.baseUrl}`)
    next();
  }
}