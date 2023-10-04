import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class ResponseLoggerMiddleware implements NestMiddleware {
  
  use(req: Request, res: Response, next: NextFunction) {
    let logger = new Logger('LoggerMiddleware')
    setTimeout(() => {
      var oldWrite = res.write
      var oldEnd = res.end;
    
      var chunks: any = [];
    
      res.write = function (chunk: any): any {
        chunks.push(chunk);
        oldWrite.apply(res, arguments);
      };
    
      res.end = function (chunk: any): any {
          if (chunk) chunks.push(chunk);
    
          var body = Buffer.concat(chunks).toString('utf8');
          if (body.length > 2000) body = body.slice(0, 2000) + '--------[TRUNCATED BY LOGGER, ACTUAL BODY LENGTH: ' + body.length + ' chars]-------- }';
    
          logger.log('>>>>> RESPONSE SENT { method: ' + req.method + ', url: ' + req.originalUrl + ', request-id: ' + req.headers['request-id'] + ' }  >>>>>' + ' -- RESPONSE BODY: ' + body);
          oldEnd.apply(res, arguments);
      };
      next(); //move to next middleware
    }, 10);
  }
}