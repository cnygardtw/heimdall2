import {IDeleteUser} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';
import {IsOptional, IsString, MinLength} from 'class-validator';

export class DeleteUserDto implements IDeleteUser {
  @ApiProperty({
    description: 'User password',
    minLength: 15,
    required: false
  })
  @IsOptional()
  @IsString()
  @MinLength(15)
  readonly password?: string;
}
