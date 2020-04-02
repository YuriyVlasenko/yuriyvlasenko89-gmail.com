import { Component, OnInit } from '@angular/core';
import { ProductCategoriesManagerService } from 'src/app/services/data-managers/product-categories-manager.service';
import { ProductCategory } from 'src/app/services/repositories/product-categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  public categories: ProductCategory[];

  constructor(private manager: ProductCategoriesManagerService) {}

  ngOnInit(): void {
    this.manager.getCategories().subscribe(items => (this.categories = items));
  }
}
