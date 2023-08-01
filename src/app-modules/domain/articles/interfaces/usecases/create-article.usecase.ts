import { Either } from '@sweet-monads/either';
import { Article } from '../../article.entity';

export interface CreateArticleUsecase {
  create(article: Article): Promise<Either<Error, Article>>;
}
