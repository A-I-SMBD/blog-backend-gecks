import { UsersComment } from '../../users-comment.entity';

export interface CreateUsersCommentUsecase {
  create(comment: UsersComment): Promise<UsersComment>;
}
