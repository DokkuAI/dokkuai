import { LoggerService as NestLogger } from '@nestjs/common';
import * as winston from 'winston';
const { combine, timestamp, printf, colorize, json } = winston.format;

export class LoggerService implements NestLogger {
  private readonly logger: winston.Logger;
  private readonly logLevel = process.env.LOG_LEVEL ?? 'info';
  private readonly isDevelopment = [
    'localhost',
    'development',
    'test',
  ].includes(process.env.NODE_ENV);

  constructor() {
    const transports = [];

    if (this.isDevelopment) {
      transports.push(
        new winston.transports.Console({
          level: this.logLevel,
          format: this.formatMessage(),
        }),
      );
    } else {
      // TODO: production logger - cloudwatch
      transports.push(
        new winston.transports.Console({
          level: this.logLevel,
          format: this.formatMessage(),
        }),
      );
    }

    // create logger
    this.logger = winston.createLogger({
      levels: { error: 0, warn: 1, info: 2, debug: 3 },
      format: this.formatMessage(),
      transports,
    });
  }

  // format message
  private formatMessage() {
    // Choose a format based on the environment
    if (this.isDevelopment) {
      return combine(
        colorize(),
        timestamp(),
        printf(({ level, message, timestamp, context, meta, error }) => {
          return `${timestamp} ${level}: [${context}] ${message} ${
            meta ? JSON.stringify(meta, null, 2) : ''
          } ${error ? JSON.stringify(error, null, 2) : ''}`;
        }),
      );
    }
    return combine(timestamp(), json());
  }

  log(message: any, context?: string, meta?: any) {
    this.logger.info(message, {
      context,
      meta,
    });
  }

  error(message: any, context?: string, meta?: any, error?: Error) {
    this.logger.error(message, {
      context,
      error,
      meta,
    });
  }
  warn(message: any, context?: string, meta?: any) {
    this.logger.warn(message, {
      context,
      meta,
    });
  }

  debug(message: any, context?: string, meta?: any) {
    this.logger.debug(message, {
      context,
      meta,
    });
  }

  verbose(message: any, context?: string, meta?: any) {
    this.logger.verbose(message, {
      context,
      meta,
    });
  }
}
