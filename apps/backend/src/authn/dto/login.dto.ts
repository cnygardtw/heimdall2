import {ILoginUser} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';

export class LoginDto implements ILoginUser {
  @ApiProperty({
    description: 'Username (email)'
  })
  readonly email: string;
  @ApiProperty({
    description: 'User password'
  })
  readonly password: string;

  constructor(user: ILoginUser) {
    this.email = user.email;
    this.password = user.password;
  }
}
