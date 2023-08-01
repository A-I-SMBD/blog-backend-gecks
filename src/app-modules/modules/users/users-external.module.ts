import { Module } from '@nestjs/common';
import { UsersPersistanceModule } from './persistances/users-persistance.module';

@Module({
  imports: [UsersPersistanceModule],
  exports: [UsersPersistanceModule],
})
export class UsersExternalModule {}
