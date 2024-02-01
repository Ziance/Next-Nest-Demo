import { IsOptional, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  locationName: string;

  @IsString()
  @IsOptional()
  locationDescription?: string;
}
