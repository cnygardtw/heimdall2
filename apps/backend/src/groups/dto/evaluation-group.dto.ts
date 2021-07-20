import {IEvaluationGroup} from '@heimdall/interfaces';
import {IsNotEmpty, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EvaluationGroupDto implements IEvaluationGroup {
  @ApiProperty({
    description: 'Evaluation group identifier'
  })
  @IsNotEmpty()
  @IsString()
  readonly id!: string;
}
