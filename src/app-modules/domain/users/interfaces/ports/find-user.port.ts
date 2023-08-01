import { Either } from '@sweet-monads/either';
import { UserId, User } from '../../user.entity';

export interface FindUserPort {
  find(id: UserId): Promise<Either<Error, User | null>>;
  findByUsername(username: string): Promise<Either<Error, User | null>>;
}
