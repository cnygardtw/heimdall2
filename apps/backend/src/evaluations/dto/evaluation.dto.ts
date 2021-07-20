import {IEvaluation} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';
import {EvaluationTagDto} from '../../evaluation-tags/dto/evaluation-tag.dto';
import {GroupDto} from '../../groups/dto/group.dto';
import {Evaluation} from '../evaluation.model';

export class EvaluationDto implements IEvaluation {
  @ApiProperty({
    description: 'Evaluation identifier'
  })
  readonly id: string;
  @ApiProperty({
    description: 'Evaluation filename'
  })
  filename: string;
  @ApiProperty({
    description: 'Evaluation data record'
  })
  readonly data?: Record<string, unknown>;
  @ApiProperty({
    description: 'Evaluation tags list',
    type: [EvaluationTagDto]
  })
  readonly evaluationTags: EvaluationTagDto[];
//  @ApiProperty({
//    description: 'Evaluations list',
//    type: [EvaluationDto]
//  })
//  readonly Evaluations: EvaluationDto[];
  @ApiProperty({
    description: 'Groups associated with evaluation'
  })
  readonly groups: GroupDto[];
  @ApiProperty({
    description: 'User id associated with evaluation'
  })
  readonly userId: string;
  @ApiProperty({
    description: 'Flag indicating whether the evaluation is public'
  })
  readonly public: boolean;
  @ApiProperty({
    description: 'Date when evaluation was created'
  })
  readonly createdAt: Date;
  @ApiProperty({
    description: 'Date when evaluation was last updated'
  })
  readonly updatedAt: Date;
  @ApiProperty({
    description: 'Flag indicating whether the evaluation is editable'
  })
  readonly editable: boolean;
  @ApiProperty({
    description: 'Shareable URL'
  })
  readonly shareURL?: string;

  constructor(
    evaluation: Evaluation,
    editable = false,
    shareURL: string | undefined = undefined
  ) {
    this.id = evaluation.id;
    this.filename = evaluation.filename;
    this.data = evaluation.data;
    if (
      evaluation.evaluationTags === null ||
      evaluation.evaluationTags === undefined
    ) {
      this.evaluationTags = [];
    } else {
      this.evaluationTags = evaluation.evaluationTags.map(
        (tag) => new EvaluationTagDto(tag)
      );
    }
    if (evaluation.groups === null || evaluation.groups === undefined) {
      this.groups = [];
    } else {
      this.groups = evaluation.groups.map((tag) => new GroupDto(tag));
    }
    this.userId = evaluation.userId;
    this.public = evaluation.public;
    this.createdAt = evaluation.createdAt;
    this.updatedAt = evaluation.updatedAt;
    this.editable = editable;
    this.shareURL = shareURL;
  }
}
