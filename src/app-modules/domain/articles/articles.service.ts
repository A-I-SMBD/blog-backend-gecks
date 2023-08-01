import { UserId } from '../users/user.entity';
import { Article, ArticleId } from './article.entity';
import { CreateArticlePort } from './interfaces/ports/create-article.port';
import { FindArticlesPort } from './interfaces/ports/find-articles.port';
import { UpdateArticlePort } from './interfaces/ports/update-article.port';
import { CreateArticleUsecase } from './interfaces/usecases/create-article.usecase';
import { FindArticlesUsecase } from './interfaces/usecases/find-articles.usecase';
import { UpdateArticleUsecase } from './interfaces/usecases/update-article.usecase';

export const ArticlesServiceSymbol = Symbol('ArticlesService');

export class ArticlesService
  implements CreateArticleUsecase, FindArticlesUsecase, UpdateArticleUsecase
{
  constructor(
    private readonly _createArticlePort: CreateArticlePort,
    private readonly _findArticlePort: FindArticlesPort,
    private readonly _updateArticlePort: UpdateArticlePort,
  ) {}

  create(article: Article): Promise<Article> {
    return this._createArticlePort.create(article);
  }

  find(id: ArticleId): Promise<Article> {
    return this._findArticlePort.find(id);
  }

  findMany(page: number, limit: number): Promise<Article[]> {
    return this._findArticlePort.findMany(page, limit);
  }

  findManyByAuthorId(
    authorId: UserId,
    page: number,
    limit: number,
  ): Promise<Article[]> {
    return this._findArticlePort.findManyByAuthorId(authorId, page, limit);
  }

  update(article: Article): Promise<Article> {
    return this._updateArticlePort.update(article);
  }

  async publish(id: ArticleId): Promise<void> {
    const article: Article = await this.find(id);
    article.isPublished = true;

    await this.update(article);
  }
}
