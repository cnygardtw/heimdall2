/* eslint-disable @typescript-eslint/no-explicit-any */
import {Injectable} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Injectable()
export class APIKeyOrJwtAuthGuard extends AuthGuard(['jwt', 'apikey']) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handleRequest(_err: never, user: any, _info: never): any {
    return user;
  }
}