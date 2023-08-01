import { Article, ArticleId } from '../../article.entity';

export interface UpdateArticleUsecase {
  update(article: Article): Promise<Article>;
  publish(id: ArticleId): Promise<void>;
}
