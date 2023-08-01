import { Article } from '../../article.entity';

export interface CreateArticleUsecase {
  create(article: Article): Promise<Article>;
}
