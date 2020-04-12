import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss'],
})
export class AdminOrdersComponent implements OnInit {
  public tableSettings: TableSettings;
  public dataSource: object[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dataSource = [
      {
        orderId: 'orderId 1',
        date: new Date().toISOString(),
        buyer: 'buyer 1',
        phone: 'phone 1',
        email: 'email 1',
        region: 'region 1',
        city: 'city 1',
        deliveryDepartment: 'deliveryDepartment 1',
        total: 200,
      },
      {
        orderId: 'orderId 2',
        date: new Date().toISOString(),
        buyer: 'buyer 2',
        phone: 'phone 2',
        email: 'email 2',
        region: 'region 2',
        city: 'city 2',
        deliveryDepartment: 'deliveryDepartment 2',
        total: 200,
      },
    ];
    let columns = [
      new TableColumnSettings('Заказ', 'orderId'),
      new TableColumnSettings('Дата', 'date'),
      new TableColumnSettings('Покупатель', 'buyer'),
      new TableColumnSettings('Телефон', 'phone'),
      new TableColumnSettings('Email', 'email'),
      new TableColumnSettings('Область', 'region'),
      new TableColumnSettings('Город', 'city'),
      new TableColumnSettings('Отделение', 'deliveryDepartment'),
      new TableColumnSettings('Сумма', 'total'),
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
