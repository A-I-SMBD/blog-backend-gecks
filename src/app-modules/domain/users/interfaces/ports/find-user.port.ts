import { UserId, User } from '../../user.entity';

export interface FindUserPort {
  find(id: UserId): Promise<User | Error | null>;
  findByUsername(username: string): Promise<User | Error | null>;
}
