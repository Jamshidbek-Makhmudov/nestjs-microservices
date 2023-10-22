import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductDto extends PartialType(CreateProductDto) {
	// id:number;
	// @ApiProperty({ example: 'title', description: "title" })
	// title:string;
	// @ApiProperty({ example: 'image', description: "image" })
	// image:string;
	// @ApiProperty({ example: 'likes', description: "likes" })
	// likes:number;
}
