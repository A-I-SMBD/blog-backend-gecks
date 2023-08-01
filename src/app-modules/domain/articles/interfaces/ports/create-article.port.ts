import { Article } from '../../article.entity';

export interface CreateArticlePort {
  create(article: Article): Promise<Article>;
}
