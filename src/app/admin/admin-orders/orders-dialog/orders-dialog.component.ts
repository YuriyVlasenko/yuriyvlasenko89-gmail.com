import { Component, OnInit, Inject } from '@angular/core';
import {
  ProductOrder,
  ProductOrdersService,
} from 'src/app/services/repositories/product-orders.service';
import { DialogData } from '../../entity-base-operation';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { KeyValueMap } from 'src/app/services/key-value-map';

@Component({
  selector: 'app-orders-dialog',
  templateUrl: './orders-dialog.component.html',
  styleUrls: ['./orders-dialog.component.scss'],
})
export class OrdersDialogComponent implements OnInit {
  public orderStatuses: KeyValueMap<number, string>[] = [];
  constructor(
    public dialogRef: MatDialogRef<OrdersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<ProductOrder>,
    private productOrdersService: ProductOrdersService,
    private dictionaryService: DictionaryService
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {
    this.orderStatuses = this.dictionaryService.orderStatuses;
  }

  onSubmit() {
    this.dialogRef.close(this.data.itemData);
  }
}
