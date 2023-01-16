import { IRetrieveUserListDTO } from '../dtos/retrieve-user-list.dto';
import { UserEntity } from '../entities/user.entity';
import { UsersRepository } from '../repositories/users.repository';

export class RetrieveUserListService {
  async execute(dto: IRetrieveUserListDTO): Promise<UserEntity[]> {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.find(dto);

    return users;
  }
}
