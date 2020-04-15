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

export interface CategoryDialogData {
  category: ProductCategory;
}

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss'],
})
export class AdminCategoriesComponent implements OnInit {
  public tableSettings: TableSettings;
  public dataSource: ProductCategory[] = [];
  constructor(
    public dialog: MatDialog,
    public productCategoriesService: ProductCategoriesService
  ) {}

  private loadData() {
    this.productCategoriesService.getItems().then((productCategories) => {
      this.dataSource = productCategories;
    });
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
    this.showDialog(ProductCategory.clone(item)).then((category) => {
      if (category) {
        this.productCategoriesService
          .editItem(category as ProductCategory)
          .then(() => {
            this.loadData();
          })
          .catch((error) => {
            // TODO: show alert
            console.log('error', error);
          });
      }
    });
  }
  onRemove(item) {
    console.log('item', item.id);
    this.productCategoriesService
      .deleteItem(item.id)
      .then(() => {
        this.dataSource = this.dataSource.filter((cat) => cat.id !== item.id);
      })
      .catch((error) => {
        // TODO: show alert
        console.log('error', error);
      });
  }
  onCreate() {
    this.showDialog(new ProductCategory('', '', '', '')).then((category) => {
      if (category) {
        this.productCategoriesService
          .createItem(category as ProductCategory)
          .then(() => {
            this.loadData();
          })
          .catch((error) => {
            // TODO: show alert
            console.log('error', error);
          });
      }
    });
  }

  private showDialog(category) {
    let dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '400px',
      data: { category },
    });

    return new Promise((resolve, reject) => {
      dialogRef.afterClosed().subscribe((category) => {
        category ? resolve(category) : resolve(null);
      });
    });
  }
}
