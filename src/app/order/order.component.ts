import { Component, OnInit } from '@angular/core';
import {
  BascketService,
  Bascket,
  BascketItem,
} from '../services/bascket.service';
import {
  ProductOrder,
  OrderProduct,
} from '../services/repositories/product-orders.service';
import { ProductOrdersManagerService } from '../services/data-managers/product-orders-manager.service';
import { DictionaryService } from '../services/dictionary.service';
import { KeyValueMap } from '../services/key-value-map';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  public order: ProductOrder = new ProductOrder(
    '',
    '',
    '',
    '',
    1,
    0,
    '',
    '',
    '',
    []
  );
  public orderItems: BascketItem[] = [];
  public totalPrice: number = 0;
  public orderId: string = '';
  public regions: KeyValueMap<number, string>[] = [];
  private basket: Bascket;

  constructor(
    private basketService: BascketService,
    private productOrdersManagerService: ProductOrdersManagerService,
    private dictionaryService: DictionaryService
  ) {
    this.regions = this.dictionaryService.regions;
  }
  public isOrderValid() {
    this.order;
    return true;
  }

  ngOnInit(): void {
    this.basketService.getBasket().then((basket) => {
      this.basket = basket;
      this.orderItems = this.basket.getItems();
      this.totalPrice = this.basket.getTotalPrice();
      this.order.products = this.orderItems.map(
        (orderItem) =>
          new OrderProduct(
            orderItem.product.id,
            orderItem.product.price,
            orderItem.count
          )
      );
    });
  }

  onSubmit() {
    console.log(this.order);
    this.productOrdersManagerService
      .createOrder(this.order)
      .then((orderId) => {
        this.orderId = orderId + '';
        this.basket.clear();
        this.orderItems = [];
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
