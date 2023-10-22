import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport} from '@nestjs/microservices';

/**
 * micorsevice ni ishag tushirish uchun app.ts ni setting qilish kerar
 * listen.ts, va package.js file ni setting qilish kerak
 * va runqilayotda yana 1ta terminal ochib npm run listen buyrugini yozamiz
 */
const bootstrap = async () => {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        //link form rabbit cloud
        urls: [
          "amqps://rksybvsl:vUM4_iBfhZG-izVaQCZ9bIiT1z6Ienne@shark.rmq.cloudamqp.com/rksybvsl"
        ],

        queue: 'main_products_queue',
        queueOptions: {
          durable:false,
        }
      }
    }
  )
  app.listen();
};

bootstrap();
