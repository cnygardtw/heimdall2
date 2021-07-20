import {IUpdateEvaluation} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';
import {IsBoolean, IsObject, IsOptional, IsString} from 'class-validator';

export class UpdateEvaluationDto implements IUpdateEvaluation {
  @ApiProperty({
    description: 'Evaluation filename'
  })
  @IsOptional()
  @IsString()
  readonly filename: string | undefined;

  @ApiProperty({
    description: 'Record property to update'
  })
  @IsOptional()
  @IsObject()
  readonly data: Record<string, unknown> | undefined;

  @ApiProperty({
    description: 'Whether the data is public'
  })
  @IsOptional()
  @IsBoolean()
  readonly public: boolean | undefined;
}
