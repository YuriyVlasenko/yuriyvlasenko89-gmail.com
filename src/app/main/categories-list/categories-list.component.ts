import { Component, OnInit } from '@angular/core';
import { ProductCategoriesManagerService } from 'src/app/services/data-managers/product-categories-manager.service';
import { ProductCategory } from 'src/app/services/repositories/product-categories.service';
import { Router } from '@angular/router';
import RouterPaths from '../../routerPaths.const';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  host: { class: 'categories-list' },
})
export class CategoriesListComponent implements OnInit {
  public categories: ProductCategory[] = [];

  constructor(
    private manager: ProductCategoriesManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.manager
      .getCategories()
      .then((categories) => (this.categories = categories));
  }

  onChooseCategory(category: ProductCategory) {
    this.router.navigateByUrl(`/${RouterPaths.CATEGORY}/${category.name}`);
  }
}
