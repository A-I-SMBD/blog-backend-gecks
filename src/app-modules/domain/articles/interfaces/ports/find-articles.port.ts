import { UserId } from '../../../users/user.entity';
import { Article, ArticleId } from '../../article.entity';

export interface FindArticlesPort {
  find(id: ArticleId): Promise<Article>;
  findMany(page: number, limit: number): Promise<Article[]>;
  findManyByAuthorId(
    authorId: UserId,
    page: number,
    limit: number,
  ): Promise<Article[]>;
}
