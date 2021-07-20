import {ICreateEvaluation} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator';
import {CreateEvaluationTagDto} from '../../evaluation-tags/dto/create-evaluation-tag.dto';

export class CreateEvaluationDto implements ICreateEvaluation {
  @ApiProperty({
    description: 'Evaluation filename'
  })
  @IsNotEmpty()
  @IsString()
  readonly filename!: string;

  @ApiProperty({
    description: 'Flag indicating the evaluation is public'
  })
  @IsNotEmpty()
  @IsBoolean()
  readonly public!: boolean;

  @ApiProperty({
    description: 'Set of tags for the evaluation',
    type: [CreateEvaluationTagDto]
  })
  @IsOptional()
  @IsArray()
  readonly evaluationTags: CreateEvaluationTagDto[] | undefined;

  @ApiProperty({
    description: 'Set of groups to which the evaluation belongs'
  })
  @IsOptional()
  @IsArray()
  readonly groups: string[] | undefined;
}
