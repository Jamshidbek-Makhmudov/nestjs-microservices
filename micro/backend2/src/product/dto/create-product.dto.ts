import { ApiProperty } from "@nestjs/swagger";
export class CreateProductDto {

	@ApiProperty({ example: 'id', description: "id" })
	id:number;
	@ApiProperty({ example: 'title', description: "title" })
	title:string;
	@ApiProperty({ example: 'image', description: "image" })
	image:string;
	@ApiProperty({ example: 'likes', description: "likes" })
	likes:number;


}
