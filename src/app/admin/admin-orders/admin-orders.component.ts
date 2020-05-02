import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import {
  ProductOrder,
  ProductOrdersService,
} from 'src/app/services/repositories/product-orders.service';
import { MatDialog } from '@angular/material/dialog';
import { OrdersDialogComponent } from './orders-dialog/orders-dialog.component';
import { EntityBaseOperation } from '../entity-base-operation';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss'],
})
export class AdminOrdersComponent extends EntityBaseOperation<ProductOrder>
  implements OnInit {
  constructor(
    public dialog: MatDialog,
    private productOrderService: ProductOrdersService
  ) {
    super(dialog, productOrderService, OrdersDialogComponent);
  }

  ngOnInit(): void {
    this.loadData();
    let columns = [
      new TableColumnSettings('Заказ', 'id'),
      new TableColumnSettings('Дата', 'date'),
      new TableColumnSettings('Покупатель', 'buyer'),
      new TableColumnSettings('Телефон', 'phone'),
      new TableColumnSettings('Область', 'regionName'),
      new TableColumnSettings('Город', 'city'),
      new TableColumnSettings('Отделение', 'deliveryDepartment'),
      new TableColumnSettings('Сумма', 'total'),
      new TableColumnSettings('Статус', 'statusName'),
    ];
    this.tableSettings = new TableSettings(columns);
  }

  onEdit(item) {
    this.edit(ProductOrder.clone(item), {
      width: '700px',
    });
  }
  onRemove(item) {
    this.remove(item.id);
  }
  onCreate(item) {
    this.create(
      new ProductOrder(
        '',
        new Date().toISOString(),
        '',
        '',
        1,
        0,
        '',
        '',
        '',
        []
      ),
      {
        width: '700px',
      }
    );
  }
}
