import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationsService {
  constructor(
    @Inject('LOCATIONS_REPOSITORY')
    private locationsRepository: Repository<Location>,
  ) {}

  async findAll(): Promise<Location[]> {
    console.log('findAll called');
    return await this.locationsRepository.find();
  }

  async findOne(id: string): Promise<Location> {
    return await this.locationsRepository.findOneBy({
      id: id,
    });
  }

  async create(data: CreateLocationDto): Promise<Location> {
    const location = await this.locationsRepository.create(data);
    return await this.locationsRepository.save(location);
  }

  async update(id: string, data: UpdateLocationDto): Promise<Location> {
    console.log('update called', id, data);
    const location = await this.locationsRepository.preload({
      id,
      ...data,
    });
    if (!location) {
      throw new NotFoundException(`record not found`);
    }
    return await this.locationsRepository.save(location);
  }

  async remove(id: string): Promise<Location> {
    const isExists = await this.locationsRepository.findOneBy({
      id: id,
    });
    if (!isExists) {
      throw new NotFoundException(`record not found`);
    }
    await this.locationsRepository.delete(id);
    return isExists;
  }
}
