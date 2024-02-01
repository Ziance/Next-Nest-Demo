import { Category } from 'src/category/entities/category.entity';
import { Location } from 'src/locations/entities/location.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable()
  category: Category[];

  @ManyToMany(() => Location, (location) => location.products)
  @JoinTable()
  location: Location[];

  @Column()
  productName: string;

  @Column({ nullable: true })
  productDescription: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int' })
  stockQuantity: number;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
