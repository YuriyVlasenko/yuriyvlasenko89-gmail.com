import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import {
  ProductsService,
  Product,
  ProductSize,
} from 'src/app/services/repositories/products.service';
import { EntityBaseOperation } from '../entity-base-operation';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent extends EntityBaseOperation<Product>
  implements OnInit {
  constructor(
    public dialog: MatDialog,
    private productsService: ProductsService
  ) {
    super(dialog, productsService, ProductDialogComponent);
  }

  ngOnInit(): void {
    this.loadData();

    let columns = [
      new TableColumnSettings('Название', 'title'),
      new TableColumnSettings('Описание', 'description'),
      new TableColumnSettings('Категория', 'category'),
      new TableColumnSettings('Цена', 'price'),
    ];
    this.tableSettings = new TableSettings(columns);
  }

  onEdit(item) {
    this.edit(Product.clone(item));
  }

  onRemove(item) {
    this.remove(item.id);
  }
  onCreate() {
    this.create(
      new Product('', '', '', '', 0, [], new ProductSize('', '', ''), [], [])
    );
  }
}
