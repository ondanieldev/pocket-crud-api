import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import { configure, getLogger } from 'log4js';
import { errors as celebrateErrors } from 'celebrate';
import Database from '@common/database';
import PathLoggerMiddleware from '@common/middlewares/PathLoggerMiddleware';
import { UsersRoutes } from '@models/users/routes/users.routes';
import ErrorsMiddleware from '@common/middlewares/ErrorsMiddleware';

configure(
  `./src/config/log4js-${
    process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
  }.json`,
);

const logger = getLogger('server');

const main = async (): Promise<void> => {
  // DATABASE
  const database = new Database();
  await database.register();

  // EXPRESS
  const app = express();

  // EXPRESS: pre-routes middlewares
  const pathLoggerMiddleware = new PathLoggerMiddleware();
  app.use(cors());
  app.use(express.json());
  app.use(pathLoggerMiddleware.execute);

  // EXPRESS: routes
  const usersHttp = new UsersRoutes();
  app.use('/users', usersHttp.register());

  // EXPRESS: post-routes middlewares
  const errorsMiddleware = new ErrorsMiddleware();
  app.use(celebrateErrors());
  app.use(errorsMiddleware.execute);

  // SERVER
  const port = process.env.API_PORT || 3000;
  app.listen(port, () => {
    logger.info(`Server running under http://localhost:${port}`);
  });
};

main();
