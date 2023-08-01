import { Either } from '@sweet-monads/either';
import { ArticleId } from '../articles/article.entity';
import { CreateUsersCommentPort } from './interfaces/ports/create-users-comment.port';
import { FindUsersCommentsPort } from './interfaces/ports/find-users-comments.port';
import { CreateUsersCommentUsecase } from './interfaces/usecases/create-users-comment.usecase';
import { FindUsersCommentsUsecase } from './interfaces/usecases/find-users-comments.usecase';
import { UsersComment } from './users-comment.entity';

export const UsersCommentsServiceSymbol = Symbol('UsersCommentsService');

export class UsersCommentsService
  implements CreateUsersCommentUsecase, FindUsersCommentsUsecase
{
  constructor(
    private readonly _createUsersCommentPort: CreateUsersCommentPort,
    private readonly _findUsersCommentsPort: FindUsersCommentsPort,
  ) {}

  create(comment: UsersComment): Promise<Either<Error, UsersComment>> {
    return this._createUsersCommentPort.create(comment);
  }

  findManyByArticleId(
    articleId: ArticleId,
    page: number,
    limit: number,
  ): Promise<Either<Error, UsersComment[]>> {
    return this._findUsersCommentsPort.findManyByArticleId(
      articleId,
      page,
      limit,
    );
  }
}
