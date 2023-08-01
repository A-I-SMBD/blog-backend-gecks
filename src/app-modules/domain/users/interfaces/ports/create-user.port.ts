import { User, UserId } from '../../user.entity';

export interface CreateUserPort {
  create(user: User): Promise<UserId | Error>;
}
