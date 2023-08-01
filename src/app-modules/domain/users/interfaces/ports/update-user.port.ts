import { User } from '../../user.entity';

export interface UpdateUserPort {
  update(user: User): Promise<User | Error>;
}
