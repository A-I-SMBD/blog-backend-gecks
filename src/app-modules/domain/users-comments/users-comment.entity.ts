import { ArticleId } from '../articles/article.entity';
import { UserId } from '../users/user.entity';
import { CreateUsersCommentdto } from './create-users-comment.dto';

export type UsersCommentId = string;

export class UsersComment {
  public get id(): UsersCommentId | undefined {
    return this._id;
  }

  private constructor(
    public text: string,
    public readonly authorId: UserId,
    public readonly articleId: ArticleId,
    private readonly _id?: UsersCommentId,
  ) {}

  static init(dto: CreateUsersCommentdto, id?: UsersCommentId): UsersComment {
    const { text, authorId, articleId } = dto;
    return new UsersComment(text, authorId, articleId, id);
  }

  static create(dto: CreateUsersCommentdto): UsersComment {
    return this.init(dto);
  }
}
