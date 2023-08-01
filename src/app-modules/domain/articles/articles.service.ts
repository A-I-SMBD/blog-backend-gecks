import { Either, right } from '@sweet-monads/either';
import { UserId } from '../users/user.entity';
import { Article, ArticleId } from './article.entity';
import { CreateArticlePort } from './interfaces/ports/create-article.port';
import { FindArticlesPort } from './interfaces/ports/find-articles.port';
import { UpdateArticlePort } from './interfaces/ports/update-article.port';
import { CreateArticleUsecase } from './interfaces/usecases/create-article.usecase';
import { FindArticlesUsecase } from './interfaces/usecases/find-articles.usecase';
import { UpdateArticleUsecase } from './interfaces/usecases/update-article.usecase';
import { left } from '@sweet-monads/either';

export const ArticlesServiceSymbol = Symbol('ArticlesService');

export class ArticlesService
  implements CreateArticleUsecase, FindArticlesUsecase, UpdateArticleUsecase
{
  constructor(
    private readonly _createArticlePort: CreateArticlePort,
    private readonly _findArticlePort: FindArticlesPort,
    private readonly _updateArticlePort: UpdateArticlePort,
  ) {}

  create(article: Article): Promise<Either<Error, Article>> {
    return this._createArticlePort.create(article);
  }

  find(id: ArticleId): Promise<Either<Error, Article>> {
    return this._findArticlePort.find(id);
  }

  findMany(page: number, limit: number): Promise<Either<Error, Article[]>> {
    return this._findArticlePort.findMany(page, limit);
  }

  findManyByAuthorId(
    authorId: UserId,
    page: number,
    limit: number,
  ): Promise<Either<Error, Article[]>> {
    return this._findArticlePort.findManyByAuthorId(authorId, page, limit);
  }

  update(article: Article): Promise<Either<Error, Article>> {
    return this._updateArticlePort.update(article);
  }

  async publish(id: ArticleId): Promise<Either<Error, undefined>> {
    const findEither: Either<Error, Article> = await this.find(id);

    if (findEither.isLeft()) {
      return left(findEither.value);
    }

    const article: Article = findEither.value;
    article.isPublished = true;

    const updateEither: Either<Error, Article> = await this.update(article);

    if (updateEither.isLeft()) {
      return left(updateEither.value);
    }

    return right(undefined);
  }
}
