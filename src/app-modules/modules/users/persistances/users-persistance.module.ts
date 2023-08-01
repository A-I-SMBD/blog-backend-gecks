import { Module, Provider } from '@nestjs/common';
import {
  UsersService,
  UsersServiceSymbol,
} from '../../../domain/users/users.service';
import { UsersTypeormAdapter } from './users-typeorm.adapter';

const services: Provider[] = [
  {
    provide: UsersServiceSymbol,
    inject: [UsersTypeormAdapter],
    useFactory: (adapter: UsersTypeormAdapter) => {
      return new UsersService(adapter, adapter, adapter);
    },
  },
];

@Module({
  providers: [...services],
  exports: [...services],
})
export class UsersPersistanceModule {}
