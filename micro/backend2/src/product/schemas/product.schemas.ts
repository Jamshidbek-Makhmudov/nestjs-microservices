import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";
export type ProductDocument=HydratedDocument<Product>
@Schema()
export class Product {
	@ApiProperty({ example: '1', description: "id" })
		@Prop()
	id:number;
	@ApiProperty({ example: 'title', description: "title" })
		@Prop()
	title:string;
	@ApiProperty({ example: 'image', description: "image" })
		@Prop()
	image:string;
	@ApiProperty({ example: 'likes', description: "likes" })
		@Prop()
	likes:number;
}
 export const ProductSchema=SchemaFactory.createForClass(Product)
