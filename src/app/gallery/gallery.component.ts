import { Component, OnInit } from '@angular/core';
import { GalleryManagerService } from '../services/data-managers/gallery-manager.service';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  public galleryImagesUrl: string = 'http://localhost:8080/api/gallery/images';
  constructor(private galleryManager: GalleryManagerService) {
    this.galleryManager.getGalleryImages().then((galleryImages) => {
      this.galleryImages = galleryImages;
    });
    this.galleryOptions = [
      {
        layout: 'thumbnails-top',
        imageSize: 'contain',
        width: '80%',
        height: '100%',
        thumbnailsPercent: 20,
        thumbnailsColumns: 6,
        thumbnailsRows: 1,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '100%',
        imagePercent: 80,
        thumbnailsColumns: 3,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        thumbnailsColumns: 2,
        preview: false,
      },
    ];
  }

  ngOnInit(): void {}
}
