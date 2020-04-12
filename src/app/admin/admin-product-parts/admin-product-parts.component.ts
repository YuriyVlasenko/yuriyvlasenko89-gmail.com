import { Component, OnInit } from '@angular/core';
import { TableColumnSettings, TableSettings } from '../table/table.component';
import { ProductPartsService } from 'src/app/services/repositories/product-parts.service';

@Component({
  selector: 'app-admin-product-parts',
  templateUrl: './admin-product-parts.component.html',
  styleUrls: ['./admin-product-parts.component.scss'],
})
export class AdminProductPartsComponent implements OnInit {
  public tableSettings: TableSettings;
  public dataSource: object[] = [];

  constructor(private productPartsService: ProductPartsService) {}

  ngOnInit(): void {
    this.productPartsService.getItems().then((productParts) => {
      this.dataSource = productParts;
    });
    let columns = [new TableColumnSettings('Название компонента', 'name')];
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
