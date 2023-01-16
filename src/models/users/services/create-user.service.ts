import { ICreateUserBO } from '../bos/create-user.bo';
import { UserEntity } from '../entities/user.entity';
import { UsersRepository } from '../repositories/users.repository';

export class CreateUserService {
  async execute(data: ICreateUserBO): Promise<UserEntity> {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.create(data);

    return user;
  }
}
