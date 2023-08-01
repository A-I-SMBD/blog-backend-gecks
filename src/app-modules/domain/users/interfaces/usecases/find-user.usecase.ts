import { User, UserId } from '../../user.entity';

export interface FindUserUsecase {
  find(id: UserId): Promise<User | null>;
  findByUsername(username: string): Promise<User | Error | null>;
}
