import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss'],
})
export class AdminCategoriesComponent implements OnInit {
  public tableSettings: TableSettings;
  public dataSource: object[] = [];
  constructor() {}

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
    console.log('edit', item);
  }
  onRemove(item) {
    console.log('remove', item);
  }
  onCreate(item) {
    console.log('create', item);
  }
}
