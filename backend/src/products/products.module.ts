import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProviders } from './products.providers';
import { DatabaseModule } from 'src/database/database.module';
import { CategoryModule } from 'src/category/category.module';
import { LocationsModule } from 'src/locations/locations.module';

@Module({
  imports: [DatabaseModule, CategoryModule, LocationsModule],
  controllers: [ProductsController],
  providers: [...productsProviders, ProductsService],
  exports: [...productsProviders, ProductsService],
})
export class ProductsModule {}
