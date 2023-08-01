import { UserId } from '../users/user.entity';
import { CreateArticleDto } from './create-article.dto';

export type ArticleId = string;

export class Article {
  public get id(): ArticleId | undefined {
    return this._id;
  }

  private constructor(
    public title: string,
    public text: string,
    public readonly authorId: UserId,
    private readonly _id?: ArticleId,
    public isPublished: boolean = false,
  ) {}

  static init(dto: CreateArticleDto, id?: ArticleId): Article {
    const { text, title, authorId } = dto;
    return new Article(title, text, authorId, id);
  }

  static create(dto: CreateArticleDto) {
    return this.init(dto);
  }
}
