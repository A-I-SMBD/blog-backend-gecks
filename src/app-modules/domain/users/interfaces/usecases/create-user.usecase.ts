import { User, UserId } from '../../user.entity';

export interface CreateUserUsecase {
  create(user: User): Promise<UserId>;
}
