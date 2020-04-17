import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  ProductCategory,
  ProductCategoriesService,
} from 'src/app/services/repositories/product-categories.service';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { EntityBaseOperation } from '../entity-base-operation';

export interface CategoryDialogData {
  itemData: ProductCategory;
}

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
    public productCategoriesService: ProductCategoriesService
  ) {
    super(dialog, productCategoriesService, CategoryDialogComponent);
  }

  ngOnInit(): void {
    this.loadData();

    let columns = [
      new TableColumnSettings('Название', 'title'),
      new TableColumnSettings('Имя в адресной строке', 'name'),
      new TableColumnSettings('Изображение', 'imageUrl'),
    ];
    this.tableSettings = new TableSettings(columns);
  }
  onEdit(item) {
    console.log('ProductCategory.clone(item)', ProductCategory.clone(item));
    this.edit(ProductCategory.clone(item));
  }
  onRemove(item) {
    this.remove(item.id);
  }
  onCreate() {
    this.create(new ProductCategory('', '', '', ''));
  }
}
