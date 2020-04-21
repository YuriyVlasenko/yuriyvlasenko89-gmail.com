import { Injectable } from '@angular/core';
import { GalleryService } from '../repositories/gallery.service';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { SettingsService } from '../repositories/settings.service';

@Injectable({
  providedIn: 'root',
})
export class GalleryManagerService {
  constructor(
    private galleryService: GalleryService,
    private settings: SettingsService
  ) {}

  getGalleryImages(): Promise<NgxGalleryImage[]> {
    return this.galleryService.getItems().then((galleryItems) => {
      return galleryItems.map((galleryItem) => {
        let url = this.settings.buildImageUrl(galleryItem.imageUrl);
        return new NgxGalleryImage({
          small: url,
          medium: url,
          big: url,
          label: galleryItem.title,
        });
      });
    });
  }
}
