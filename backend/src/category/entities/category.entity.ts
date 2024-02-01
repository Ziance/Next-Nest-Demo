import { IsString } from 'class-validator';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Product, (product) => product.category)
  products: Product[];

  @Column()
  @IsString()
  categoryName: string;

  @Column({ nullable: true })
  @IsString()
  categoryDescription: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
