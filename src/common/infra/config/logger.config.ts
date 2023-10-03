import { ConfigService } from '@nestjs/config';
import { Configuration } from "log4js";
import { Config } from '../../constant/environment.constant';
import { config } from 'dotenv';
import { LoggerVariables } from '../../constant/logger.constant';
config({ path: Config.ENV_API_PATH });

const configService = new ConfigService();

export function ConfigLogger(level: string): Configuration {
  return {
    pm2: LoggerVariables.pm2,
    appenders: {
      console: {
        type: LoggerVariables.appenders.console.type
      },
      access: {
        type: LoggerVariables.appenders.access.type,
        filename: configService.get('LOG_DIR')+LoggerVariables.appenders.access.filename,
        pattern: LoggerVariables.appenders.access.pattern,
        category: LoggerVariables.appenders.access.category
      },
      app: {
        type: LoggerVariables.appenders.app.type,
        filename: configService.get('LOG_DIR')+LoggerVariables.appenders.app.filename,
        pattern: LoggerVariables.appenders.app.pattern,
      },
      errorFile: {
        type: LoggerVariables.appenders.errorFile.type,
        filename: configService.get('LOG_DIR')+LoggerVariables.appenders.errorFile.filename,
        pattern: LoggerVariables.appenders.errorFile.pattern,
      },
      errors: {
        type: LoggerVariables.appenders.errors.type,
        level: LoggerVariables.appenders.errors.level,
        appender: LoggerVariables.appenders.errors.appender
      }
    },
    categories: {
      default: {
        appenders: LoggerVariables.categories.default.appenders,
        level: LoggerVariables.categories.default.level
      },
      http: {
        appenders: LoggerVariables.categories.http.appenders,
        level: LoggerVariables.categories.http.level
      }
    }
  }
};