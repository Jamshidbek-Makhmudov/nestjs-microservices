import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product, ProductDocument } from './schemas/product.schemas';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

  constructor(
    @InjectModel(Product.name) private  productModel: Model<ProductDocument>,
  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct=new this.productModel(createProductDto);
    return createdProduct.save();

  }

   findAll(): Promise<Product[]>  {
     return this.productModel.find().exec();

  }

  findOne(id: number): Promise<Product>  {
    return this.productModel.findOne({ id }).exec();
 
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productModel.findOneAndUpdate({ id }, updateProductDto, {new:true})
 
  }

  remove(id: number) {
    return this.productModel.deleteOne({ id })
     
 
  }
}
