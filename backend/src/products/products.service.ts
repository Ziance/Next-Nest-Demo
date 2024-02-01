import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from 'src/category/entities/category.entity';
import { Location } from 'src/locations/entities/location.entity';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: Repository<Product>,
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
    @Inject('LOCATIONS_REPOSITORY')
    private locationsRepository: Repository<Location>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productsRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.location', 'location')
      .leftJoinAndSelect('product.category', 'category')
      .getMany();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productsRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.location', 'location')
      .leftJoinAndSelect('product.category', 'category')
      .where('product.id = :id', { id: id })
      .getOne();
  }

  async create(data: CreateProductDto): Promise<Product> {
    const categories = await this.categoryRepository.find({
      where: {
        id: In(data.categoryIds),
      },
    });

    const locations = await this.locationsRepository.find({
      where: {
        id: In(data.locationIds),
      },
    });

    const product: Product = await this.productsRepository.create(data);
    product.category = categories;
    product.location = locations;
    return await this.productsRepository.save(product);
  }

  async update(id: string, data: UpdateProductDto): Promise<Product> {
    const product = await this.productsRepository.preload({
      id,
      ...data,
    });

    if (!product) {
      throw new NotFoundException(`record not found`);
    }

    // const categories = await this.categoryRepository.find({
    //   where: {
    //     id: In(data.categoryIds),
    //   },
    // });

    // const locations = await this.locationsRepository.find({
    //   where: {
    //     id: In(data.locationIds),
    //   },
    // });
    // product.category = categories;
    // product.location = locations;
    return await this.productsRepository.save(product);
  }

  async remove(id: string): Promise<Product> {
    const isExists = await this.productsRepository.findOneBy({
      id: id,
    });
    if (!isExists) {
      throw new NotFoundException(`record not found`);
    }
    await this.productsRepository.delete(id);
    return isExists;
  }
}
