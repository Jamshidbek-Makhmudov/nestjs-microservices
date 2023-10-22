import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME } from './app.constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    //process.env
    ConfigModule.forRoot({
    envFilePath:".env",
    isGlobal:true,
    }),
      //db
    MongooseModule.forRoot(process.env.DB_URI),
      //Modules:
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
