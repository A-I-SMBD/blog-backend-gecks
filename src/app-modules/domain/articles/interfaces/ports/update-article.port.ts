import { Article } from '../../article.entity';

export interface UpdateArticlePort {
  update(article: Article): Promise<Article>;
}
