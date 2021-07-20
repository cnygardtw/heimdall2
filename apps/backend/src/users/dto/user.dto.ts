import {IUser} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';
import {User} from '../user.model';

export class UserDto implements IUser {
  @ApiProperty({
    description: 'User id'
  })
  id: string;
  @ApiProperty({
    description: 'User email address'
  })
  readonly email: string;
  @ApiProperty({
    description: 'User given name'
  })
  readonly firstName: string | undefined;
  @ApiProperty({
    description: 'User family name'
  })
  readonly lastName: string | undefined;
  @ApiProperty({
    description: 'User title'
  })
  readonly title: string | undefined;
  @ApiProperty({
    description: 'User role'
  })
  readonly role: string;
  @ApiProperty({
    description: 'Organization to which user belongs'
  })
  readonly organization: string | undefined;
  @ApiProperty({
    description: 'Number of logins'
  })
  readonly loginCount: number;
  @ApiProperty({
    description: 'Date of last login'
  })
  readonly lastLogin: Date | undefined;
  @ApiProperty({
    description: 'Method of user record creation'
  })
  readonly creationMethod: string;
  @ApiProperty({
    description: 'Date user created'
  })
  readonly createdAt: Date;
  @ApiProperty({
    description: 'Date user record last updated'
  })
  readonly updatedAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.title = user.title;
    this.role = user.role;
    this.organization = user.organization;
    this.loginCount = user.loginCount;
    this.lastLogin = user.lastLogin;
    this.creationMethod = user.creationMethod;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
