import { getLogger } from 'log4js';
import { Request, Response, NextFunction } from 'express';

const logger = getLogger('middleware path logger');

class PathLoggerMiddleware {
  public execute = (
    request: Request,
    response: Response,
    next: NextFunction,
  ): void => {
    logger.info(`${request.method} ${request.path}`);
    next();
  };
}

export default PathLoggerMiddleware;
