import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import { GalleryService } from 'src/app/services/repositories/gallery.service';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.scss'],
})
export class AdminGalleryComponent implements OnInit {
  public tableSettings: TableSettings;
  public dataSource: object[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getItems().then((galleryItems) => {
      this.dataSource = galleryItems;
    });

    let columns = [
      new TableColumnSettings('Подпись', 'name'),
      new TableColumnSettings('Изображение', 'imageUrl'),
    ];
    this.tableSettings = new TableSettings(columns);
  }

  onEdit(item) {
    console.log('edit', item);
  }
  onRemove(item) {
    console.log('remove', item);
  }
  onCreate(item) {
    console.log('create', item);
  }
}
