import { IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  categoryName: string;

  @IsString()
  @IsOptional()
  categoryDescription?: string;
}
