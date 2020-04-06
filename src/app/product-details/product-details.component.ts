import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsManagerService } from '../services/data-managers/products-manager.service';
import routerPaths from '../routerPaths.const';
import { Product } from '../services/repositories/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public product: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsManager: ProductsManagerService
  ) {}

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.productsManager.getProduct(productId).subscribe((product) => {
      if (!product) {
        // TODO: show message
        console.log('product not found', productId);
        this.router.navigateByUrl(routerPaths.BASE);
        return;
      }
      console.log(product);
      this.product = product;
    });
  }
}
