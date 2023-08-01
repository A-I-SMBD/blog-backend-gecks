import { Either } from '@sweet-monads/either';
import { UsersComment } from '../../users-comment.entity';

export interface CreateUsersCommentPort {
  create(comment: UsersComment): Promise<Either<Error, UsersComment>>;
}
