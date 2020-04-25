import { Injectable } from '@angular/core';
import {
  ProductOrdersService,
  ProductOrder,
} from '../repositories/product-orders.service';

@Injectable({
  providedIn: 'root',
})
export class ProductOrdersManagerService {
  constructor(private productOrderService: ProductOrdersService) {}

  createOrder(data: ProductOrder) {
    return this.productOrderService.createItem(data);
  }
}
