import { Either } from '@sweet-monads/either';
import { ArticleId } from '../../../articles/article.entity';
import { UsersComment } from '../../users-comment.entity';

export interface FindUsersCommentsPort {
  findManyByArticleId(
    articleId: ArticleId,
    page: number,
    limit: number,
  ): Promise<Either<Error, UsersComment[]>>;
}
