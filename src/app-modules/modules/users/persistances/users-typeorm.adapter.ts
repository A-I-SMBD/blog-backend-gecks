import { CreateUserPort } from '../../../domain/users/interfaces/ports/create-user.port';
import { FindUserPort } from '../../../domain/users/interfaces/ports/find-user.port';
import { UpdateUserPort } from '../../../domain/users/interfaces/ports/update-user.port';
import { User } from '../../../domain/users/user.entity';

export class UsersTypeormAdapter
  implements FindUserPort, CreateUserPort, UpdateUserPort
{
  find(id: string): Promise<User | Error | null> {
    throw new Error('Method not implemented.');
  }
  findByUsername(username: string): Promise<User | Error | null> {
    throw new Error('Method not implemented.');
  }
  create(user: User): Promise<string | Error> {
    throw new Error('Method not implemented.');
  }
  update(user: User): Promise<User | Error> {
    throw new Error('Method not implemented.');
  }
}
