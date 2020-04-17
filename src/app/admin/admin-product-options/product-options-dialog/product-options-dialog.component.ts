import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../entity-base-operation';
import { ProductOption } from 'src/app/services/repositories/product-options.service';

@Component({
  selector: 'app-product-options-dialog',
  templateUrl: './product-options-dialog.component.html',
  styleUrls: ['./product-options-dialog.component.scss'],
})
export class ProductOptionsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProductOptionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<ProductOption>
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.dialogRef.close(this.data.itemData);
  }
}
