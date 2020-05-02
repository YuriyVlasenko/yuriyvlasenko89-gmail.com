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
      new TableColumnSettings('Замовлення', 'id'),
      new TableColumnSettings('Дата', 'date'),
      new TableColumnSettings('Покупець', 'buyer'),
      new TableColumnSettings('Телефон', 'phone'),
      new TableColumnSettings('Область', 'regionName'),
      new TableColumnSettings('Населений пункт', 'city'),
      new TableColumnSettings('Відділення', 'deliveryDepartment'),
      new TableColumnSettings('Сума', 'total'),
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
