import { Either } from '@sweet-monads/either';
import { User } from '../../user.entity';

export interface UpdateUserUsecase {
  update(user: User): Promise<Either<Error, User>>;
}
