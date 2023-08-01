import { Either } from '@sweet-monads/either';
import { UsersComment } from '../../users-comment.entity';

export interface CreateUsersCommentUsecase {
  create(comment: UsersComment): Promise<Either<Error, UsersComment>>;
}
