import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
import { LocationsModule } from './locations/locations.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CategoryModule,
    ProductsModule,
    LocationsModule,
  ],
})
export class AppModule {}
