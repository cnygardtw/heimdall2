import {IStatistics} from '@heimdall/interfaces';
import {ApiProperty} from '@nestjs/swagger';

export class StatisticsDTO implements IStatistics {
  @ApiProperty({
    description: 'User count'
  })
  readonly userCount: number;
  @ApiProperty({
    description: 'Evaluation count'
  })
  readonly evaluationCount: number;
  @ApiProperty({
    description: 'Evaluation tag count'
  })
  readonly evaluationTagCount: number;
  @ApiProperty({
    description: 'Group count'
  })
  readonly groupCount: number;

  constructor(statistics: StatisticsDTO) {
    this.userCount = statistics.userCount;
    this.evaluationCount = statistics.evaluationCount;
    this.evaluationTagCount = statistics.evaluationTagCount;
    this.groupCount = statistics.groupCount;
  }
}
