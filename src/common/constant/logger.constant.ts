export const LoggerVariables = {
  pm2: true,
  appenders: {
    console: {
      type: 'console'
    },
    access: {
      type: 'dateFile',
      filename: '/access.log',
      pattern: '-yyyy-MM-dd',
      category: 'http'
    },
    app: {
      type: 'dateFile',
      filename: '/app.log',
      pattern: '-yyyy-MM-dd'
    },
    errorFile: {
      type: 'dateFile',
      filename: '/error.log',
      pattern: '-yyyy-MM-dd'
    },
    errors: {
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: 'errorFile'
    }
  },
  categories: {
    default: {
      appenders: ['app', 'errors', 'console'],
      level: 'DEBUG'
    },
    http: {
      appenders: ['access', 'console'],
      level: 'DEBUG'
    }
  }
};

export const LOG4JS_OPTION = Symbol("LOG4JS_OPTION");