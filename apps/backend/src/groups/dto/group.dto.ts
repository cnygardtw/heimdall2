import {IGroup} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';
import {GroupUser} from '../../group-users/group-user.model';
import {SlimUserDto} from '../../users/dto/slim-user.dto';
import {Group} from '../group.model';

export class GroupDto implements IGroup {
  @ApiProperty({
    description: 'Group identifier'
  })
  readonly id: string;
  @ApiProperty({
    description: 'Group name'
  })
  readonly name: string;
  @ApiProperty({
    description: 'Whether group is public / private'
  })
  readonly public: boolean;
  @ApiProperty({
    description: 'Group role identifier'
  })
  readonly role?: string;
  @ApiProperty({
    description: 'List of users in the group'
  })
  readonly users: SlimUserDto[];
  @ApiProperty({
    description: 'When the group was created',
    type: [SlimUserDto]
  })
  readonly createdAt: Date;
  @ApiProperty({
    description: 'When the group was last updated',
    type: Date
  })
  readonly updatedAt: Date;

  constructor(group: Group & {GroupUser?: GroupUser}, role?: string) {
    this.id = group.id;
    this.name = group.name;
    this.role = role || group?.GroupUser?.role;
    this.public = group.public;
    this.users =
      group.users === undefined
        ? []
        : group.users.map((user) => {
            return new SlimUserDto(user, user.GroupUser.role);
          });
    this.createdAt = group.createdAt;
    this.updatedAt = group.updatedAt;
  }
}
