import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { locationsProviders } from './locations.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LocationsController],
  providers: [...locationsProviders, LocationsService],
  exports: [...locationsProviders, LocationsService],
})
export class LocationsModule {}
