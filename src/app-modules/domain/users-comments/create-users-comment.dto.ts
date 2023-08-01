import { ArticleId } from '../articles/article.entity';
import { UserId } from '../users/user.entity';

export interface CreateUsersCommentdto {
  text: string;
  authorId: UserId;
  articleId: ArticleId;
}
