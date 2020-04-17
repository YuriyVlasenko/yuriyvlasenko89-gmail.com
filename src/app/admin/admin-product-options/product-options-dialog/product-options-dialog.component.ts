import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductOptionDialogData } from '../admin-product-options.component';

@Component({
  selector: 'app-product-options-dialog',
  templateUrl: './product-options-dialog.component.html',
  styleUrls: ['./product-options-dialog.component.scss'],
})
export class ProductOptionsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProductOptionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductOptionDialogData
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.dialogRef.close(this.data.itemData);
  }
}
