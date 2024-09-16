import { Body, Injectable, Post } from '@nestjs/common';

import { OrdersRepository } from './order.repository';
import { crearteOrderRequest } from './dto';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository:OrdersRepository){}

 async createOrder( dto:crearteOrderRequest){
const newOrder = 'hello'

  return newOrder
  }
}
