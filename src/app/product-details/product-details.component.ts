import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsManagerService } from '../services/data-managers/products-manager.service';
import routerPaths from '../routerPaths.const';
import { Product } from '../services/repositories/products.service';
import {
  GALLERY_CONF,
  NgxImageGalleryComponent,
  GALLERY_IMAGE,
} from 'ngx-image-gallery';
import { BascketService, Bascket } from '../services/bascket.service';
import { SettingsService } from '../services/settings.service';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public product: Product;
  private bascket: Bascket;
  public galleryImages: GALLERY_IMAGE[] = [];
  public galleryConfig: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showCloseControl: false,
    showImageTitle: false,
    closeOnEsc: false,
    backdropColor: 'rgba(0,0,0,0)',
    showArrows: false,
  };

  @ViewChild(NgxImageGalleryComponent)
  ngxImageGallery: NgxImageGalleryComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsManager: ProductsManagerService,
    private bascketService: BascketService,
    private settings: SettingsService,
    private popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.bascketService.getBasket().then((bascket) => {
      this.bascket = bascket;
    });
    let productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.productsManager.getProduct(productId).then((product) => {
      if (!product) {
        this.popupService.showWarnMessage(`product not found ${productId}`);
        this.router.navigateByUrl(routerPaths.BASE);
        return;
      }
      this.initProductData(product);
    });
  }

  public getCurrectImageIndex(): number {
    return 0;
    // return this.slider && this.slider.activeImageIndex || -1;
  }

  public buyProduct() {
    this.bascket.addItem(this.product, 1);
  }

  private initProductData(product: Product) {
    this.product = product;

    this.galleryImages = this.product.imageUrls.map((imageUrl) => {
      let url = this.settings.buildImageUrl(imageUrl);
      return {
        url,
        thumbnailUrl: url,
      };
    });
    setTimeout(() => {
      this.ngxImageGallery.open();
    }, 0);
  }
}
