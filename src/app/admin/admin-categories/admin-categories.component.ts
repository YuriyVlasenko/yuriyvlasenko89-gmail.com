import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ProductCategory } from 'src/app/services/repositories/product-categories.service';
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
  public dataSource: object[] = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = [
      {
        id: '1',
        title: 'title 1',
        name: 'url-title-1',
        imageUrls: [],
      },
      {
        id: '2',
        title: 'title 2',
        name: 'url-title-2',
        imageUrls: [],
      },
    ];
    let columns = [
      new TableColumnSettings('Название', 'title'),
      new TableColumnSettings('Имя в адресной строке', 'name'),
      new TableColumnSettings('Изображение', 'imageUrl'),
    ];
    this.tableSettings = new TableSettings(columns);
  }
  onEdit(item) {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '250px',
      data: { category: ProductCategory.clone(item) },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
  onRemove(item) {
    console.log('remove', item);
  }
  onCreate() {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '250px',
      data: { category: new ProductCategory('', '', '', '') },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
