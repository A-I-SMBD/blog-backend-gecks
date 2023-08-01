import { Either } from '@sweet-monads/either';
import { User, UserId } from '../../user.entity';

export interface FindUserUsecase {
  find(id: UserId): Promise<Either<Error, User | null>>;
  findByUsername(username: string): Promise<Either<Error, User | null>>;
}
