import {
  IsEmail,
  IsOptional,
  IsNotEmpty,
  IsString,
  IsIn,
  IsBoolean
} from 'class-validator';
import {IUpdateUser} from '@heimdall/interfaces';

export class UpdateUserDto implements IUpdateUser {
  @IsEmail()
  @IsOptional()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly firstName: string;

  @IsOptional()
  @IsString()
  readonly lastName: string;

  @IsOptional()
  @IsString()
  readonly organization: string;

  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  @IsIn(['user'])
  readonly role: string;

  @IsOptional()
  @IsString()
  readonly password: string;

  @IsOptional()
  @IsString()
  readonly passwordConfirmation: string;

  @IsOptional()
  @IsBoolean()
  readonly forcePasswordChange: boolean;

  @IsNotEmpty()
  @IsString()
  readonly currentPassword: string;
}