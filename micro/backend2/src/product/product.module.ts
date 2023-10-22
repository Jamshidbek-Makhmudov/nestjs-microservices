import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product, ProductSchema } from './schemas/product.schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductMicroServiceController } from './product-microservice.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    HttpModule,
  ],
  controllers: [ProductController,ProductMicroServiceController],
  providers: [ProductService],
})
export class ProductModule {}
