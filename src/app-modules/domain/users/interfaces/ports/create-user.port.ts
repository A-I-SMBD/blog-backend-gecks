import { Either } from '@sweet-monads/either';
import { User, UserId } from '../../user.entity';

export interface CreateUserPort {
  create(user: User): Promise<Either<Error, UserId>>;
}
