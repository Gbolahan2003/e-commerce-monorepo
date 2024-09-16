import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { crearteOrderRequest } from './dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('test')
  async createOrder(@Body() dto: crearteOrderRequest) {
    return this.ordersService.createOrder(dto);
  }
}
