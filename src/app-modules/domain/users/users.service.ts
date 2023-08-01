import { User, UserId } from './user.entity';
import { CreateUserPort } from './interfaces/ports/create-user.port';
import { FindUserPort } from './interfaces/ports/find-user.port';
import { CreateUserUsecase } from './interfaces/usecases/create-user.usecase';
import { FindUserUsecase } from './interfaces/usecases/find-user.usecase';
import { UpdateUserUsecase } from './interfaces/usecases/update-user.usecase';
import { UpdateUserPort } from './interfaces/ports/update-user.port';
import { UsernameIsTaken } from './exceptions/username-is-taken.exception';

export const UsersServiceSymbol = Symbol('UsersService');

export class UsersService
  implements CreateUserUsecase, FindUserUsecase, UpdateUserUsecase
{
  constructor(
    private readonly _createUserPort: CreateUserPort,
    private readonly _findUserPort: FindUserPort,
    private readonly _updateUserPort: UpdateUserPort,
  ) {}
  async create(user: User): Promise<string> {
    const existsUser: User | Error | null = await this.findByUsername(
      user.username,
    );

    if (existsUser instanceof Error) {
      throw existsUser;
    }

    if (existsUser) {
      throw UsernameIsTaken.init();
    }

    const createdUserId: UserId | Error = await this._createUserPort.create(
      user,
    );

    if (createdUserId instanceof Error) {
      throw createdUserId;
    }

    return createdUserId;
  }

  async find(id: string): Promise<User | null> {
    const user: User | Error | null = await this._findUserPort.find(id);

    if (user instanceof Error) {
      throw user;
    }

    return user;
  }

  async findByUsername(username: string): Promise<User | null> {
    const user: User | Error | null = await this._findUserPort.findByUsername(
      username,
    );

    if (user instanceof Error) {
      throw user;
    }

    return user;
  }

  async update(user: User): Promise<User> {
    const updatedUser: User | Error = await this._updateUserPort.update(user);

    if (updatedUser instanceof Error) {
      throw updatedUser;
    }

    return updatedUser;
  }
}
