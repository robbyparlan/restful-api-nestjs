import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as multiparty from 'multiparty'


@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  
  use(req: Request, res: Response, next: NextFunction) {
    let logger = new Logger('LoggerMiddleware')
    let form = new multiparty.Form();
    form.parse(req, function (err, fields, files) {
      const reqId = Date.now()
      req.headers['request-id'] = reqId.toString()

      let strLog = '<<<<< REQUEST RECEIVED: { method: ' + req.method + ', url: ' + req.originalUrl + ', request-id: ' + req.headers['request-id'] + ' } <<<<<';

      strLog += ' -- REQUEST HEADERS: ' + JSON.stringify(req.headers);

      if (req.params)
          strLog += ' -- REQUEST PARAMS: ' + JSON.stringify(req.params);
      if (req.body)
          strLog += ' -- REQUEST BODY: ' + JSON.stringify(req.body);
      if (fields)
          strLog += ' -- FORM/MULTIPART FIELDS: ' + JSON.stringify(fields);
      if (files)
          strLog += ' -- FORM/MULTIPART FILES: ' + JSON.stringify(files);

      let dataLog: string = strLog.length > 2000 ? (strLog.slice(0, 2000)+'--------[TRUNCATED BY LOGGER, ACTUAL BODY LENGTH: ' + strLog.length + ' chars]-------- }') : strLog
      logger.log(dataLog)
      
    });
    next();
  }
}