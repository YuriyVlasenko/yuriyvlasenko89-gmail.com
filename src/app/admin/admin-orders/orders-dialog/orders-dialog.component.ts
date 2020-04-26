import { Component, OnInit, Inject } from '@angular/core';
import {
  ProductOrder,
  ProductOrdersService,
  OrderStatus,
} from 'src/app/services/repositories/product-orders.service';
import { DialogData } from '../../entity-base-operation';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-orders-dialog',
  templateUrl: './orders-dialog.component.html',
  styleUrls: ['./orders-dialog.component.scss'],
})
export class OrdersDialogComponent implements OnInit {
  public orderStatuses: OrderStatus[] = [];
  constructor(
    public dialogRef: MatDialogRef<OrdersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<ProductOrder>,
    private productOrdersService: ProductOrdersService
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {
    this.orderStatuses = this.productOrdersService.getStatuses();
  }

  onSubmit() {
    this.dialogRef.close(this.data.itemData);
  }
}
