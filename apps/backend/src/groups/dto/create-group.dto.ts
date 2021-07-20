import {ICreateGroup} from '@heimdall/interfaces';
import {IsBoolean, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDto implements ICreateGroup {
  @ApiProperty({
    description: 'Name of the group'
  })
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @ApiProperty({
    description: 'Flag indicating public / private'
  })
  @IsOptional()
  @IsBoolean()
  readonly public!: boolean;
}
