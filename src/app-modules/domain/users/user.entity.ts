import { CreateUserEntityDto } from './create-user-entity.dto';

export type UserId = string;

export class User {
  public get id(): UserId | undefined {
    return this._id;
  }

  private constructor(
    public readonly username: string,
    public nickname = 'Anonymus',
    private readonly _id?: UserId,
  ) {}

  static init(dto: CreateUserEntityDto, id?: UserId): User {
    const { username, nickname } = dto;
    return new User(username, nickname, id);
  }

  static initNewUser(dto: CreateUserEntityDto): User {
    return this.init(dto);
  }
}
