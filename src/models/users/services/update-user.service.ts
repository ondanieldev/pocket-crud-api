import { HttpError } from '@common/errors/HttpError';
import { IUpdateUserDTO } from '../dtos/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UsersRepository } from '../repositories/users.repository';

export class UpdateUserService {
  async execute({ id, data }: IUpdateUserDTO): Promise<UserEntity> {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findOne({
      id,
    });
    if (!user) {
      throw new HttpError('User not found', 404);
    }

    Object.assign(user, data);
    await usersRepository.save(user);

    return user;
  }
}
