import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('product')
export class ProductMicroServiceController {
  constructor(private readonly productService: ProductService) { }
  @MessagePattern('hello')
  async hello(data: string) { 
    console.log(data);
    
  }
  @EventPattern('product_created')//@Post
  create(@Body() createProductDto: CreateProductDto) { 
    return this.productService.create(createProductDto);
  }

    @EventPattern('product_updated')//@Patch
    update(@Body() UpdateProductDto: UpdateProductDto) {
      const { id, ...updateData}= UpdateProductDto
    return this.productService.update(id,updateData);
  }
    @EventPattern('product_deleted')//@delete
    remove(id:string) {
      
    return this.productService.remove(+id);
  }

  // @Post()
  // create(@Body() createProductDto: CreateProductDto) {
  //   return this.productService.create(createProductDto);
  // }

  // @Get()
  // findAll() {
  //   return this.productService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productService.findOne(+id);
  // }

  // @Patch()
  // update(@Param()  @Body() updateProductDto: UpdateProductDto) {
  //   const { id, ...updateData } = updateProductDto;
  //   return this.productService.update(id,updateData)

    
  // }

  // @Delete(':id')
  //  remove(@Param('id') id: string) {
  //   return this.productService.remove(+id);
    
  // }
}
