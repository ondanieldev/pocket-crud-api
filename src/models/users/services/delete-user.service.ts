import { HttpError } from '@common/errors/HttpError';
import { IDeleteUserDTO } from '../dtos/delete-user.dto';
import { UsersRepository } from '../repositories/users.repository';

export class DeleteUserService {
  async execute({ id }: IDeleteUserDTO): Promise<void> {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findOne({
      id,
    });
    if (!user) {
      throw new HttpError('User not found', 404);
    }

    await usersRepository.delete(id);
  }
}
