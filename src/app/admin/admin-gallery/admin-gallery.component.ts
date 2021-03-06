import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import {
  GalleryService,
  Gallery,
} from 'src/app/services/repositories/gallery.service';
import { EntityBaseOperation } from '../entity-base-operation';
import { MatDialog } from '@angular/material/dialog';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.scss'],
})
export class AdminGalleryComponent extends EntityBaseOperation<Gallery>
  implements OnInit {
  constructor(
    public dialog: MatDialog,
    galleyService: GalleryService,
    popupService: PopupService
  ) {
    super(dialog, galleyService, GalleryDialogComponent, popupService);
  }

  ngOnInit(): void {
    this.loadData();

    let columns = [
      new TableColumnSettings('Підпис', 'title'),
      new TableColumnSettings('Порядок', 'order'),
      new TableColumnSettings('Фото', 'imageUrls', true, undefined, 'image'),
    ];
    this.tableSettings = new TableSettings(columns);
  }

  onEdit(item) {
    this.edit(Gallery.clone(item), {});
  }

  onRemove(item) {
    this.remove(item.id);
  }
  onCreate() {
    this.create(new Gallery('', '', 0, ''), {});
  }
}
