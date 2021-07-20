import {IAddUserToGroup} from '@heimdall/interfaces';
import {IsNotEmpty, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddUserToGroupDto implements IAddUserToGroup {
  @ApiProperty({
    description: 'Identifier for the user'
  })
  @IsNotEmpty()
  @IsString()
  readonly userId!: string;

  @ApiProperty({
    description: 'Group role identifier'
  })
  @IsNotEmpty()
  @IsString()
  readonly groupRole!: string;
}
