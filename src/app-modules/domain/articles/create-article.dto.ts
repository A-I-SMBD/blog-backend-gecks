import { UserId } from '../users/user.entity';

export interface CreateArticleDto {
  title: string;
  text: string;
  authorId: UserId;
}
