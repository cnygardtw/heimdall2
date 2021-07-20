import {IRemoveUserFromGroup} from '@heimdall/interfaces';
import {IsNotEmpty, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveUserFromGroupDto implements IRemoveUserFromGroup {
  @ApiProperty({
    description: 'User identifier'
  })
  @IsNotEmpty()
  @IsString()
  readonly userId!: string;
}
