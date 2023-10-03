import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(HttpException)
export class CustomException extends BaseExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        const status = exception.getStatus();
        const message = exception.message;
        const data = (exception.getResponse() as any).data;

        response.status(status).json({
            success: false,
            code: status,
            message: message,
            data: data,
        });
    }
}
