import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { UpdateLocationDto } from './dto/update-location.dto';
import { CreateLocationDto } from './dto/create-location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  async findAll() {
    return await this.locationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.locationsService.findOne(id);
  }

  @Post()
  async create(@Body() location: CreateLocationDto) {
    return await this.locationsService.create(location);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() location: UpdateLocationDto) {
    console.log('id : ', id);
    return await this.locationsService.update(id, location);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.locationsService.remove(id);
  }
}
