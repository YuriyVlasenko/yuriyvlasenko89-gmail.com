import { Component, OnInit, Inject } from '@angular/core';
import {
  ProductSize,
  Product,
} from 'src/app/services/repositories/products.service';
import { DialogData } from '../../entity-base-operation';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<Product>
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.dialogRef.close(this.data.itemData);
  }
}
