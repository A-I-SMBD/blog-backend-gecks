import { Either } from '@sweet-monads/either';
import { Article, ArticleId } from '../../article.entity';

export interface UpdateArticleUsecase {
  update(article: Article): Promise<Either<Error, Article>>;
  publish(id: ArticleId): Promise<Either<Error, undefined>>;
}
