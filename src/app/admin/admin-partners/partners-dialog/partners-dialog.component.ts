import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartnerDialogData } from '../admin-partners.component';

@Component({
  selector: 'app-partners-dialog',
  templateUrl: './partners-dialog.component.html',
  styleUrls: ['./partners-dialog.component.scss'],
})
export class PartnersDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PartnersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PartnerDialogData
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.dialogRef.close(this.data.itemData);
  }
}
