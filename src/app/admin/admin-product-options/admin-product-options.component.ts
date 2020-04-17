import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import {
  ProductOptionsService,
  ProductOption,
} from 'src/app/services/repositories/product-options.service';
import { EntityBaseOperation } from '../entity-base-operation';
import { MatDialog } from '@angular/material/dialog';
import { ProductOptionsDialogComponent } from './product-options-dialog/product-options-dialog.component';

export interface ProductOptionDialogData {
  itemData: ProductOption;
}

@Component({
  selector: 'app-admin-product-options',
  templateUrl: './admin-product-options.component.html',
  styleUrls: ['./admin-product-options.component.scss'],
})
export class AdminProductOptionsComponent
  extends EntityBaseOperation<ProductOption>
  implements OnInit {
  constructor(
    public dialog: MatDialog,
    private productOptionsService: ProductOptionsService
  ) {
    super(dialog, productOptionsService, ProductOptionsDialogComponent);
  }

  ngOnInit(): void {
    this.loadData();

    let columns = [new TableColumnSettings('Название опции', 'name')];
    this.tableSettings = new TableSettings(columns);
  }
  onEdit(item) {
    this.edit(ProductOption.clone(item));
  }

  onRemove(item) {
    this.remove(item.id);
  }
  onCreate() {
    this.create(new ProductOption('', ''));
  }
}
