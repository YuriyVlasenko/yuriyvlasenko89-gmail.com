import { Component, OnInit, Inject } from '@angular/core';
import {
  ProductSize,
  Product,
} from 'src/app/services/repositories/products.service';
import { DialogData } from '../../entity-base-operation';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductOption } from 'src/app/services/repositories/product-options.service';

class CheckedItem {
  constructor(
    public id: string,
    public label: string,
    public isChecked: boolean
  ) {}
}

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  public productOptions: CheckedItem[] = [];
  public productParts: CheckedItem[] = [];

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<Product>
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {
    let existOptions = this.data.itemData.options;
    this.productOptions = this.data.dictionaries.productOptions.map((item) => {
      return new CheckedItem(
        item.id,
        item.name,
        !!existOptions.find((optionId) => optionId === item.id)
      );
    });
    console.log(this.productOptions);
    let existParts = this.data.itemData.parts;
    this.productParts = this.data.dictionaries.productParts.map((item) => {
      return new CheckedItem(
        item.id,
        item.name,
        !!existParts.find((partId) => partId === item.id)
      );
    });
  }

  onSubmit() {
    this.data.itemData.options = this.productOptions
      .filter((option) => option.isChecked)
      .map((option) => option.id);
    this.data.itemData.parts = this.productParts
      .filter((part) => part.isChecked)
      .map((part) => part.id);
    this.dialogRef.close(this.data.itemData);
  }
}
