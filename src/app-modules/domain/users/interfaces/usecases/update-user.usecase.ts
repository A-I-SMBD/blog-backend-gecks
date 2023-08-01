import { User } from '../../user.entity';

export interface UpdateUserUsecase {
  update(user: User): Promise<User>;
}
