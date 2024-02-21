import { IsNotEmpty } from 'class-validator';

export class AgentListQueryDto {
  @IsNotEmpty()
  limit: number;

  @IsNotEmpty()
  offset: number;
}
