import {
  IsArray,
  IsDecimal,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Column } from 'typeorm';

export class CreateProductDto {
  @IsArray()
  categoryIds: string[];

  @IsArray()
  locationIds: string[];

  @IsString()
  productName: string;

  @Column({ default: '', nullable: true })
  @IsString()
  @IsOptional()
  productDescription?: string;

  @IsDecimal()
  price: number;

  @IsNumber()
  stockQuantity: number;

  // Include the image file in the DTO
  image: string;
}
