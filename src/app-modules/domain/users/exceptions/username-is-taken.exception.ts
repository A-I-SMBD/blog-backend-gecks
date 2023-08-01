export class UsernameIsTaken extends Error {
  private constructor() {
    super('Username занят другим пользователем');
  }

  static init() {
    return new UsernameIsTaken();
  }
}
