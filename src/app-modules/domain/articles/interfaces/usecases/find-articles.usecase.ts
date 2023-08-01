import { Either } from '@sweet-monads/either';
import { UserId } from '../../../users/user.entity';
import { Article, ArticleId } from '../../article.entity';

export interface FindArticlesUsecase {
  find(id: ArticleId): Promise<Either<Error, Article>>;
  findMany(page: number, limit: number): Promise<Either<Error, Article[]>>;
  findManyByAuthorId(
    authorId: UserId,
    page: number,
    limit: number,
  ): Promise<Either<Error, Article[]>>;
}
