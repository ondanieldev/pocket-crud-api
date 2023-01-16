import { getRepository, Repository } from 'typeorm';
import { ICreateUserBO } from '../bos/create-user.bo';
import { IFilterUserBO } from '../bos/filter-user.bo';
import { UserEntity } from '../entities/user.entity';

export class UsersRepository {
  private ormRepository: Repository<UserEntity>;

  constructor() {
    this.ormRepository = getRepository(UserEntity);
  }

  public async create(data: ICreateUserBO): Promise<UserEntity> {
    const user = this.ormRepository.create(data);
    await this.ormRepository.save(user);
    return user;
  }

  public async save(user: UserEntity): Promise<void> {
    await this.ormRepository.save(user);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findOne(filter: IFilterUserBO): Promise<UserEntity | null> {
    const user = await this.ormRepository.findOne({
      where: filter,
    });
    if (!user) return null;
    return user;
  }

  public async find(filter: IFilterUserBO): Promise<UserEntity[]> {
    const users = await this.ormRepository.find({
      where: filter,
    });
    return users;
  }
}
