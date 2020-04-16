import { Component, OnInit, Inject } from '@angular/core';
import { ProductPartDialogData } from '../admin-product-parts.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-parts-dialog',
  templateUrl: './product-parts-dialog.component.html',
  styleUrls: ['./product-parts-dialog.component.scss']
})
export class ProductPartsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductPartsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductPartDialogData
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {}

}
