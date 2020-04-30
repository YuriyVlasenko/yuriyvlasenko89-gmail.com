import { Component, OnInit, Inject } from '@angular/core';
import {
  ProductOrder,
  ProductOrdersService,
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

@Component({
  selector: 'app-orders-dialog',
  templateUrl: './orders-dialog.component.html',
  styleUrls: ['./orders-dialog.component.scss'],
})
export class OrdersDialogComponent implements OnInit {
  public products: Product[] = [];
  public basketItems: BascketItem[] = [];
  public orderStatuses: KeyValueMap<number, string>[] = [];
  public regions: KeyValueMap<number, string>[] = [];
  constructor(
    public dialogRef: MatDialogRef<OrdersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<ProductOrder>,
    private productOrdersService: ProductOrdersService,
    private dictionaryService: DictionaryService,
    private productsService: ProductsService
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {
    this.orderStatuses = this.dictionaryService.orderStatuses;
    this.regions = this.dictionaryService.regions;
    this.productsService.getItems().then((products) => {
      this.products = products;
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
      console.log('this.basketItems', this.basketItems);
    });
  }

  onSubmit() {
    this.dialogRef.close(this.data.itemData);
  }

  onChangeCount(data) {
    // productIt, count
  }
  onRemoveProduct() {}

  onChooseProduct(data) {
    console.log(data);
  }
}
