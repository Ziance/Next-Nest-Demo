import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    console.log('findAll called');
    return await this.categoryRepository.find();
  }

  async findOne(id: string): Promise<Category> {
    return await this.categoryRepository.findOneBy({
      id: id,
    });
  }

  async create(data: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.create(data);
    return await this.categoryRepository.save(category);
  }

  async update(id: string, data: UpdateCategoryDto): Promise<Category> {
    console.log('update called', id, data);
    const category = await this.categoryRepository.preload({
      id,
      ...data,
    });
    if (!category) {
      throw new NotFoundException(`record not found`);
    }
    return await this.categoryRepository.save(category);
  }

  async remove(id: string): Promise<Category> {
    const isExists = await this.categoryRepository.findOneBy({
      id: id,
    });
    if (!isExists) {
      throw new NotFoundException(`record not found`);
    }
    await this.categoryRepository.delete(id);
    return isExists;
  }
}
