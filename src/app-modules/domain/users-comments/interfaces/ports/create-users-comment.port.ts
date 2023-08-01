import { UsersComment } from '../../users-comment.entity';

export interface CreateUsersCommentPort {
  create(comment: UsersComment): Promise<UsersComment>;
}
