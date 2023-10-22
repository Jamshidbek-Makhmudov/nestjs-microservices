import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Product {
	@ApiProperty({ example: '1', description: "id" })
	@PrimaryGeneratedColumn()
	id:number;
	@ApiProperty({ example: 'title', description: "title" })
	@Column()
	title:string;
	@ApiProperty({ example: 'image', description: "image" })
	@Column()
	image:string;
	@ApiProperty({ example: 'likes', description: "likes" })
	@Column({default:0})
	likes:number;


 }
