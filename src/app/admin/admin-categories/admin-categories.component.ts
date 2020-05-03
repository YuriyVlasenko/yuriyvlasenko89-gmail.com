import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import { MatDialog } from '@angular/material/dialog';
import {
  ProductCategory,
  ProductCategoriesService,
} from 'src/app/services/repositories/product-categories.service';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { EntityBaseOperation } from '../entity-base-operation';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss'],
})
export class AdminCategoriesComponent
  extends EntityBaseOperation<ProductCategory>
  implements OnInit {
  constructor(
    public dialog: MatDialog,
    productCategoriesService: ProductCategoriesService,
    popupService: PopupService
  ) {
    super(
      dialog,
      productCategoriesService,
      CategoryDialogComponent,
      popupService
    );
  }

  ngOnInit(): void {
    this.loadData();

    let columns = [
      new TableColumnSettings('Назва', 'title'),
      new TableColumnSettings('Назва URL', 'name'),
      new TableColumnSettings('Фото', 'imageUrls', true, undefined, 'image'),
    ];
    this.tableSettings = new TableSettings(columns);
  }
  onEdit(item) {
    this.edit(ProductCategory.clone(item), {});
  }
  onRemove(item) {
    this.remove(item.id);
  }
  onCreate() {
    this.create(new ProductCategory('', '', '', ''), {});
  }
}
