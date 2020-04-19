import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Partner } from 'src/app/services/repositories/partners.service';
import { DialogData } from '../../entity-base-operation';
import { ImageManagerService } from '../../image-manager.service';
import { ImageListSettings } from '../../image-list/image-list.component';

@Component({
  selector: 'app-partners-dialog',
  templateUrl: './partners-dialog.component.html',
  styleUrls: ['./partners-dialog.component.scss'],
})
export class PartnersDialogComponent implements OnInit {
  public imageListSettings: ImageListSettings = {
    canAdd: true,
    canDelete: true,
  };

  constructor(
    public dialogRef: MatDialogRef<PartnersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<Partner>,
    private imageManager: ImageManagerService
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.dialogRef.close(this.data.itemData);
  }
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
}
