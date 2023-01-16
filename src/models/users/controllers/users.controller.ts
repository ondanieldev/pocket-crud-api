import { Request, Response, NextFunction } from 'express';
import { CreateUserService } from '../services/create-user.service';
import { DeleteUserService } from '../services/delete-user.service';
import { RetrieveUserListService } from '../services/retrieve-user-list.service';
import { RetrieveUserService } from '../services/retrieve-user.service';
import { UpdateUserService } from '../services/update-user.service';

export class UsersController {
  public async createUser(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const createUserService = new CreateUserService();
    const user = await createUserService.execute(req.body);
    return res.status(201).json(user);
  }

  public async retrieveUser(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const retrieveUserService = new RetrieveUserService();
    const user = await retrieveUserService.execute({
      id: req.params.id,
    });
    return res.status(200).json(user);
  }

  public async retrieveUserList(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const retrieveUserListService = new RetrieveUserListService();
    const users = await retrieveUserListService.execute(req.query);
    return res.status(200).json(users);
  }

  public async updateUser(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const updateUserService = new UpdateUserService();
    const user = await updateUserService.execute({
      id: req.params.id,
      data: req.body,
    });
    return res.status(200).json(user);
  }

  public async deleteUser(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const deleteUserService = new DeleteUserService();
    await deleteUserService.execute({
      id: req.params.id,
    });
    return res.status(204).json();
  }
}
