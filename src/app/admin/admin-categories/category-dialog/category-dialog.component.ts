import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductCategory } from 'src/app/services/repositories/product-categories.service';
import { DialogData } from '../../entity-base-operation';
import { ImageManagerService } from '../../image-manager.service';
import { ImageListSettings } from '../../image-list/image-list.component';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss'],
})
export class CategoryDialogComponent implements OnInit {
  public imageListSettings: ImageListSettings = {
    canAdd: true,
    canDelete: true,
  };

  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<ProductCategory>,
    private imageManager: ImageManagerService
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {}

  onAddImage(imageId) {
    this.data.itemData.imageUrl = imageId || '';
  }

  onRemoveItem() {
    this.imageManager
      .removeFile(this.data.itemData.imageUrl)
      .then(() => {
        this.data.itemData.imageUrl = '';
      })
      .catch((error) => {
        console.log('remove image error', error);
      });
  }

  onSubmit() {
    this.dialogRef.close(this.data.itemData);
  }
}
