import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../entity-base-operation';
import { ProductPart } from 'src/app/services/repositories/product-parts.service';

@Component({
  selector: 'app-product-parts-dialog',
  templateUrl: './product-parts-dialog.component.html',
  styleUrls: ['./product-parts-dialog.component.scss'],
})
export class ProductPartsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProductPartsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<ProductPart>
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.dialogRef.close(this.data.itemData);
  }
}
