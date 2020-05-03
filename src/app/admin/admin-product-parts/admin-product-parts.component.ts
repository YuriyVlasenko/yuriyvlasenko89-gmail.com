import { Component, OnInit } from '@angular/core';
import { TableColumnSettings, TableSettings } from '../table/table.component';
import {
  ProductPartsService,
  ProductPart,
} from 'src/app/services/repositories/product-parts.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductPartsDialogComponent } from './product-parts-dialog/product-parts-dialog.component';
import { EntityBaseOperation } from '../entity-base-operation';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-admin-product-parts',
  templateUrl: './admin-product-parts.component.html',
  styleUrls: ['./admin-product-parts.component.scss'],
})
export class AdminProductPartsComponent extends EntityBaseOperation<ProductPart>
  implements OnInit {
  constructor(
    public dialog: MatDialog,
    productPartsService: ProductPartsService,
    popupService: PopupService
  ) {
    super(
      dialog,
      productPartsService,
      ProductPartsDialogComponent,
      popupService
    );
  }

  ngOnInit(): void {
    this.loadData();
    let columns = [new TableColumnSettings('Назва компоненту', 'name')];
    this.tableSettings = new TableSettings(columns);
  }

  onEdit(item) {
    this.edit(ProductPart.clone(item), {});
  }

  onRemove(item) {
    this.remove(item.id);
  }
  onCreate() {
    this.create(new ProductPart('', ''), {});
  }
}
