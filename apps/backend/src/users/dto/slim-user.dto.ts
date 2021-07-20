import {ISlimUser} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';
import {IsOptional, IsString} from 'class-validator';
import {User} from '../user.model';

export class SlimUserDto implements ISlimUser {
  @ApiProperty({
    description: 'User identifier'
  })
  @IsString()
  readonly id: string;

  @ApiProperty({
    description: 'User email'
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    description: 'User title'
  })
  @IsOptional()
  @IsString()
  readonly title?: string;

  @ApiProperty({
    description: 'User group role'
  })
  @IsOptional()
  @IsString()
  readonly groupRole?: string;

  @ApiProperty({
    description: 'User given name'
  })
  @IsOptional()
  @IsString()
  readonly firstName?: string;

  @ApiProperty({
    description: 'User family name'
  })
  @IsOptional()
  @IsString()
  readonly lastName?: string;

  constructor(user: User, groupRole: string | undefined = undefined) {
    this.id = user.id;
    this.email = user.email;
    this.title = user.title;
    this.groupRole = groupRole;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }
}
