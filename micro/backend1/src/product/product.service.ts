import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { title, image}=createProductDto
    return this.productRepository.save({title, image});
  }

  async findAll(): Promise<Product[]>  {
    const products=await this.productRepository.find()
    return products;
  }

   findOne(id: number): Promise<Product>  {
    return this.productRepository.findOneBy({id});
  }

   update(id: number, updateProductDto: UpdateProductDto)  {
     return this.productRepository.update({id}, updateProductDto);
  }

   remove(id: number)  {
    return this.productRepository.delete({id});
  }
}
