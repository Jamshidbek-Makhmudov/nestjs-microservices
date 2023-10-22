import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
//bu bizga backend2 dan tuib like bosganimizda backend 1 da ham bosilibqolishiga aytiladi
import { HttpService} from '@nestjs/axios';

 
@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
     private readonly httpService:HttpService
  ) { }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }
  @Post(':id/like')
  async likeBoss(@Param('id') id: string) {
    
    let product = await this.productService.findOne(+id)
    if (!product) { 
      throw new NotFoundException("cant't find this product");
    }
    product = await this.productService.update(+id, {
      likes:product.likes +1
    })
    try {
      this.httpService.post(`http://localhost:3000/api/product/${id}/like`, { /** bu ichida data yuborsak boladi buni backend1da body()ni ichida tutib olamiz */}).subscribe((res) => { 
        console.log(res);
        
      })
      
    } catch (error) {
      console.log(error);
      
    }
    return product;
   }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch()
  update(@Param()  @Body() updateProductDto: UpdateProductDto) {
    const { id, ...updateData } = updateProductDto;
    return this.productService.update(id,updateData)

    
  }

  @Delete(':id')
   remove(@Param('id') id: string) {
    return this.productService.remove(+id);
    
  }
}
