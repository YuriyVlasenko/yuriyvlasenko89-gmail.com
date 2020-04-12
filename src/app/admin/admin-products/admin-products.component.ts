import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import { ProductsService } from 'src/app/services/repositories/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  public tableSettings: TableSettings;
  public dataSource: object[] = [];

  constructor(private producService: ProductsService) {}

  ngOnInit(): void {
    this.producService.getItems().then((products) => {
      this.dataSource = products;
    });

    let columns = [
      new TableColumnSettings('Название', 'title'),
      new TableColumnSettings('Описание', 'description'),
      new TableColumnSettings('Категория', 'category'),
      new TableColumnSettings('Цена', 'price'),
    ];
    this.tableSettings = new TableSettings(columns);
  }

  onEdit(item) {
    console.log('edit', item);
  }
  onRemove(item) {
    console.log('remove', item);
  }
  onCreate(item) {
    console.log('create', item);
  }
}
