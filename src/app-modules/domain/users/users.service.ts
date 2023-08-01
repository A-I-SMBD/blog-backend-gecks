import { User, UserId } from './user.entity';
import { CreateUserPort } from './interfaces/ports/create-user.port';
import { FindUserPort } from './interfaces/ports/find-user.port';
import { CreateUserUsecase } from './interfaces/usecases/create-user.usecase';
import { FindUserUsecase } from './interfaces/usecases/find-user.usecase';
import { UpdateUserUsecase } from './interfaces/usecases/update-user.usecase';
import { UpdateUserPort } from './interfaces/ports/update-user.port';
import { UsernameIsTaken } from './exceptions/username-is-taken.exception';
import { Either, left } from '@sweet-monads/either';

export const UsersServiceSymbol = Symbol('UsersService');

export class UsersService
  implements CreateUserUsecase, FindUserUsecase, UpdateUserUsecase
{
  constructor(
    private readonly _createUserPort: CreateUserPort,
    private readonly _findUserPort: FindUserPort,
    private readonly _updateUserPort: UpdateUserPort,
  ) {}
  async create(user: User): Promise<Either<Error, UserId>> {
    const findByUsernameEither: Either<Error, User | null> =
      await this.findByUsername(user.username);

    if (findByUsernameEither.isLeft()) {
      return left(findByUsernameEither.value);
    }

    const existsUser: User | null = findByUsernameEither.value;

    if (existsUser) {
      return left(UsernameIsTaken.init());
    }

    return this._createUserPort.create(user);
  }

  async find(id: string): Promise<Either<Error, User | null>> {
    return this._findUserPort.find(id);
  }

  async findByUsername(username: string): Promise<Either<Error, User | null>> {
    return this._findUserPort.findByUsername(username);
  }

  async update(user: User): Promise<Either<Error, User>> {
    return this._updateUserPort.update(user);
  }
}
