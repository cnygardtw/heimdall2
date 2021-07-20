import {ICreateEvaluationTag} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString} from 'class-validator';

export class CreateEvaluationTagDto implements ICreateEvaluationTag {
  @ApiProperty({
    description: 'Tag value'
  })
  @IsNotEmpty()
  @IsString()
  readonly value!: string;

  constructor(evaluationTag: string) {
    this.value = evaluationTag;
  }
}
