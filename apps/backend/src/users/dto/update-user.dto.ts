import {IUpdateUser} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';
import {IsBoolean, IsEmail, IsIn, IsOptional, IsString} from 'class-validator';

export class UpdateUserDto implements IUpdateUser {
  @ApiProperty({
    description: 'User email address'
  })
  @IsEmail()
  @IsOptional()
  readonly email: string | undefined;

  @ApiProperty({
    description: 'User given name'
  })
  @IsOptional()
  @IsString()
  readonly firstName!: string | undefined;

  @ApiProperty({
    description: 'User family name'
  })
  @IsOptional()
  @IsString()
  readonly lastName!: string | undefined;

  @ApiProperty({
    description: 'Organization to which the user belongs'
  })
  @IsOptional()
  @IsString()
  readonly organization!: string | undefined;

  @ApiProperty({
    description: 'User title'
  })
  @IsOptional()
  @IsString()
  readonly title!: string | undefined;

  @ApiProperty({
    description: 'User role',
    enum: ['user', 'admin']
  })
  @IsOptional()
  @IsString()
  @IsIn(['user', 'admin'])
  readonly role: string | undefined;

  @ApiProperty({
    description: 'User password'
  })
  @IsOptional()
  @IsString()
  readonly password: string | undefined;

  @ApiProperty({
    description: 'Password confirmation, must be identical to password'
  })
  @IsOptional()
  @IsString()
  readonly passwordConfirmation: string | undefined;

  @ApiProperty({
    description: 'Flag to force the user to change password'
  })
  @IsOptional()
  @IsBoolean()
  readonly forcePasswordChange: boolean | undefined;

  @ApiProperty({
    description: 'Current password'
  })
  @IsOptional()
  @IsString()
  readonly currentPassword?: string;
}
