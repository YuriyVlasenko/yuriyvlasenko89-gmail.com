import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export class TableColumnSettings {
  constructor(
    public label: string,
    public name: string,
    public visible: boolean = true,
    public getData = (element) => element && element[this.name]
  ) {}
}

export class TableSettings {
  constructor(public columns: TableColumnSettings[] = []) {}

  getDisplayedColumns() {
    return this.columns.filter((column) => column.visible);
  }

  getDisplayedColumnNames() {
    return [
      ...this.getDisplayedColumns().map((column) => column.name),
      'actions',
    ];
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input('tableSettings') tableSettings: TableSettings;
  @Input('dataSource') dataSource: object[];
  @Output('create') create = new EventEmitter();
  @Output('edit') edit = new EventEmitter();
  @Output('remove') remove = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  createItem() {
    this.create.emit();
  }
  editItem(item) {
    this.edit.emit(item);
  }
  removeItem(item) {
    this.remove.emit(item);
  }
}
