import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

import { ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    ClientsModule.register([
      {
        name: "PRODUCT_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: [
            "amqps://rksybvsl:vUM4_iBfhZG-izVaQCZ9bIiT1z6Ienne@shark.rmq.cloudamqp.com/rksybvsl"
          ],
          queue: 'main_products_queue',
          queueOptions: {
            durable: false,
          },
        }
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
