import { HttpError } from '@common/errors/HttpError';
import { IRetrieveUserDTO } from '../dtos/retrieve-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UsersRepository } from '../repositories/users.repository';

export class RetrieveUserService {
  async execute({ id }: IRetrieveUserDTO): Promise<UserEntity> {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findOne({
      id,
    });
    if (!user) {
      throw new HttpError('User not found', 404);
    }

    return user;
  }
}
