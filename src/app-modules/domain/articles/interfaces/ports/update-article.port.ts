import { Either } from '@sweet-monads/either';
import { Article } from '../../article.entity';

export interface UpdateArticlePort {
  update(article: Article): Promise<Either<Error, Article>>;
}
