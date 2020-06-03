import { Module } from '@nestjs/common';
import { AuthnService } from './authn.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthnController } from './authn.controller';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthnService, LocalStrategy],
  controllers: [AuthnController]
})
export class AuthnModule {}