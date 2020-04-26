import { Injectable } from '@angular/core';
import { GalleryService } from '../repositories/gallery.service';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { SettingsService } from '../settings.service';

@Injectable({
  providedIn: 'root',
})
export class GalleryManagerService {
  private cache: NgxGalleryImage[] = [];

  constructor(
    private galleryService: GalleryService,
    private settings: SettingsService
  ) {}

  getGalleryImages(clearCache = false): Promise<NgxGalleryImage[]> {
    if (this.cache.length && !clearCache) {
      return Promise.resolve(this.cache);
    }
    return this.galleryService.getItems().then((galleryItems) => {
      let images = galleryItems.map((galleryItem) => {
        let url = this.settings.buildImageUrl(galleryItem.imageUrl);
        return new NgxGalleryImage({
          small: url,
          medium: url,
          big: url,
          label: galleryItem.title,
        });
      });
      this.cache = images;
      return images;
    });
  }
}
