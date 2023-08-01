import { Either } from '@sweet-monads/either';
import { Article } from '../../article.entity';

export interface CreateArticlePort {
  create(article: Article): Promise<Either<Error, Article>>;
}
