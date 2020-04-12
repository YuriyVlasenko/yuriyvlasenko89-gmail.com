import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import { ProductOptionsService } from 'src/app/services/repositories/product-options.service';

@Component({
  selector: 'app-admin-product-options',
  templateUrl: './admin-product-options.component.html',
  styleUrls: ['./admin-product-options.component.scss'],
})
export class AdminProductOptionsComponent implements OnInit {
  public tableSettings: TableSettings;
  public dataSource: object[] = [];

  constructor(private productOptionService: ProductOptionsService) {}

  ngOnInit(): void {
    this.productOptionService.getItems().then((productOptions) => {
      this.dataSource = productOptions;
    });

    let columns = [new TableColumnSettings('Название опции', 'name')];
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
