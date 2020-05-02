import { Component, OnInit, Inject } from '@angular/core';
import {
  ProductOrder,
  ProductOrdersService,
  OrderProduct,
} from 'src/app/services/repositories/product-orders.service';
import { DialogData } from '../../entity-base-operation';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { KeyValueMap } from 'src/app/services/key-value-map';
import {
  ProductsService,
  Product,
} from 'src/app/services/repositories/products.service';
import { BascketItem } from 'src/app/services/bascket.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-orders-dialog',
  templateUrl: './orders-dialog.component.html',
  styleUrls: ['./orders-dialog.component.scss'],
})
export class OrdersDialogComponent implements OnInit {
  public products: Product[] = [];
  private allproducts: Product[] = [];
  public basketItems: BascketItem[] = [];
  public orderStatuses: KeyValueMap<number, string>[] = [];
  public regions: KeyValueMap<number, string>[] = [];
  constructor(
    public dialogRef: MatDialogRef<OrdersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<ProductOrder>,
    private productOrdersService: ProductOrdersService,
    private dictionaryService: DictionaryService,
    private productsService: ProductsService,
    private popupService: PopupService
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {
    this.orderStatuses = this.dictionaryService.orderStatuses;
    this.regions = this.dictionaryService.regions;
    this.productsService.getItems().then((products) => {
      this.products = products;
      this.allproducts = products;
      this.basketItems = this.data.itemData.products
        .map((orderProduct) => {
          let bascketProduct = this.products.find(
            (p) => p.id === orderProduct.id
          );
          if (!bascketProduct) {
            return null;
          }
          return new BascketItem(bascketProduct, orderProduct.count);
        })
        .filter((b) => b != null);
    });
  }

  onSubmit() {
    this.data.itemData.products = this.basketItems.map((bi) => {
      return new OrderProduct(bi.product.id, bi.product.price, bi.count);
    });
    this.data.itemData.total = this.getTotalPrice();
    this.dialogRef.close(this.data.itemData);
  }

  getTotalPrice() {
    let total = 0;
    this.basketItems.forEach((bi) => {
      total += bi.product.price * bi.count;
    });
    return total;
  }

  onRemoveProduct(productId) {
    this.basketItems = this.basketItems.filter(
      (bi) => bi.product.id !== productId
    );
  }

  onChooseProduct(product) {
    let basketProduct = this.basketItems.find(
      (bi) => bi.product.id === product.id
    );
    if (basketProduct) {
      this.popupService.showMessage(
        `${basketProduct.product.title} уже добавлен`
      );
      return;
    }
    this.basketItems.push(new BascketItem(product, 1));
  }

  onSearch(searchString) {
    if (!searchString) {
      this.products = this.allproducts;
      return;
    }
    this.productsService.findItems(searchString).then((products) => {
      this.products = products;
    });
  }
}
