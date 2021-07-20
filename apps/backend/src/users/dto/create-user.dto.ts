import {ICreateUser} from '@heimdall/interfaces';
import {IsEmail, IsIn, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto implements ICreateUser {
  @ApiProperty({
    description: 'User email address'
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email!: string;

  @ApiProperty({
    description: 'Password'
  })
  @IsNotEmpty()
  @IsString()
  readonly password!: string;

  @ApiProperty({
    description: 'Password confirmation'
  })
  @IsNotEmpty()
  @IsString()
  readonly passwordConfirmation!: string;

  @ApiProperty({
    description: 'User given name'
  })
  @IsOptional()
  @IsString()
  readonly firstName: string | undefined;

  @ApiProperty({
    description: 'User family name'
  })
  @IsOptional()
  @IsString()
  readonly lastName: string | undefined;

  @ApiProperty({
    description: 'Organization to which user belongs'
  })
  @IsOptional()
  @IsString()
  readonly organization: string | undefined;

  @ApiProperty({
    description: 'User title'
  })
  @IsOptional()
  @IsString()
  readonly title: string | undefined;

  @ApiProperty({
    description: 'User role identifier'
  })
  @IsNotEmpty()
  @IsString()
  @IsIn(['user'])
  readonly role!: string;

  @ApiProperty({
    description: 'Method for user creation',
    enum: ['local', 'ldap', 'github', 'gitlab', 'google', 'okta']
  })
  @IsNotEmpty()
  @IsString()
  @IsIn(['local', 'ldap', 'github', 'gitlab', 'google', 'okta', 'ldap'])
  readonly creationMethod!: string;
}
