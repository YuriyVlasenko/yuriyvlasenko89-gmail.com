import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import RouterPaths from '../routerPaths.const';
import { ProductCategoriesManagerService } from '../services/data-managers/product-categories-manager.service';
import { ProductsManagerService } from '../services/data-managers/products-manager.service';
import { flatMap, filter } from 'rxjs/operators';
import { Product } from '../services/repositories/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public showCategoriesList: boolean = true;
  public products: Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoriesManager: ProductCategoriesManagerService,
    private productManager: ProductsManagerService
  ) {}

  ngOnInit(): void {
    let categoryName = this.activatedRoute.snapshot.paramMap.get(
      'categoryName'
    );
    if (categoryName) {
      this.categoriesManager
        .getCategory({
          name: categoryName,
          id: null
        })
        .subscribe(category => {
          if (!category) {
            this.router.navigateByUrl(`/${RouterPaths.BASE}`);
            return;
          }
          this.showCategoriesList = false;
          this.loadProducts(category.id);
        });
    }
  }

  private loadProducts(categoryId) {
    this.productManager.getProductsByCategory(categoryId).subscribe(product => {
      this.products.push(product);
    });
  }
}
