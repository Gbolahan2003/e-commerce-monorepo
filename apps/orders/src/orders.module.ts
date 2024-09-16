import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from '@app/common'; // Import shared DatabaseModule
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersRepository } from './order.repository';
import { Order, OrderSchema } from './schema/order.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Make environment variables globally available
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/orders/.env',  // Specify the path to the app-specific .env file
    }),
    DatabaseModule, // Shared database connection module from `libs/common`
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),  // Register the schema
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
