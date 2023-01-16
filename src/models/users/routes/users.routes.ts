import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import { UsersController } from '../controllers/users.controller';

export class UsersRoutes {
  public register(): Router {
    const router = Router();

    const usersController = new UsersController();

    router.post(
      '/',
      celebrate({
        [Segments.BODY]: Joi.object().keys({
          name: Joi.string().required(),
          email: Joi.string().email().required(),
        }),
      }),
      usersController.createUser,
    );

    router.get(
      '/:id',
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().uuid().required(),
        }),
      }),
      usersController.retrieveUser,
    );

    router.get(
      '/',
      celebrate({
        [Segments.QUERY]: Joi.object().keys({
          name: Joi.string(),
          email: Joi.string().email(),
        }),
      }),
      usersController.retrieveUserList,
    );

    router.put(
      '/:id',
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().uuid().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
          name: Joi.string().required(),
          email: Joi.string().email().required(),
        }),
      }),
      usersController.updateUser,
    );

    router.delete(
      '/:id',
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().uuid().required(),
        }),
      }),
      usersController.deleteUser,
    );

    return router;
  }
}
