import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME } from './app.constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';


@Module({
  imports: [
    //process.env
    ConfigModule.forRoot({
    envFilePath:".env",
    isGlobal:true,
    }),
      //db
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_URI,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Product],
      synchronize: true,
    }),
      ProductModule,

    
      //Modules:
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
