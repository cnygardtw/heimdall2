import {IDeleteEvaluationTag} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsNumberString, IsString, Min} from 'class-validator';

export class DeleteEvaluationTagDto implements IDeleteEvaluationTag {
  @ApiProperty({
    description: 'Tag id',
    minimum: 1
  })
  @IsNotEmpty()
  @IsNumberString()
  @Min(1)
  readonly id!: string;

  @ApiProperty({
    description: 'Tag value'
  })
  @IsNotEmpty()
  @IsString()
  readonly value!: string;
}
