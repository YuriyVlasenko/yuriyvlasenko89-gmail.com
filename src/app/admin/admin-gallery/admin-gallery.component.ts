import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import {
  GalleryService,
  Gallery,
} from 'src/app/services/repositories/gallery.service';
import { EntityBaseOperation } from '../entity-base-operation';
import { MatDialog } from '@angular/material/dialog';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.scss'],
})
export class AdminGalleryComponent extends EntityBaseOperation<Gallery>
  implements OnInit {
  constructor(public dialog: MatDialog, private galleyService: GalleryService) {
    super(dialog, galleyService, GalleryDialogComponent);
  }

  ngOnInit(): void {
    this.loadData();

    let columns = [
      new TableColumnSettings('Подпись', 'title'),
      new TableColumnSettings('Изображение', 'imageUrl'),
    ];
    this.tableSettings = new TableSettings(columns);
  }

  onEdit(item) {
    this.edit(Gallery.clone(item));
  }

  onRemove(item) {
    this.remove(item.id);
  }
  onCreate() {
    this.create(new Gallery('', '', ''));
  }
}
