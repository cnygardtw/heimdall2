import {IEvaluationTag} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';
import {EvaluationTag} from '../evaluation-tag.model';

export class EvaluationTagDto implements IEvaluationTag {
  @ApiProperty({
    description: 'Evaluation tag identifier'
  })
  readonly id: string;
  @ApiProperty({
    description: 'Evaluation tag value'
  })
  readonly value: string;
  @ApiProperty({
    description: 'Related Evaluation Id '
  })
  readonly evaluationId: string;
  @ApiProperty({
    description: 'Date when evaluation tag was created'
  })
  readonly createdAt: Date;
  @ApiProperty({
    description: 'Date when evaluation tag was last updated'
  })
  readonly updatedAt: Date;

  constructor(evaluationTag: EvaluationTag) {
    this.id = evaluationTag.id;
    this.value = evaluationTag.value;
    this.evaluationId = evaluationTag.evaluationId;
    this.createdAt = evaluationTag.createdAt;
    this.updatedAt = evaluationTag.updatedAt;
  }
}
