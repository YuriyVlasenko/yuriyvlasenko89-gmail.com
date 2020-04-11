import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ProductsService,
  Product,
} from '../services/repositories/products.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  public products: Product[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((routeParams) => {
      this.productService
        .findItems(routeParams.searchPhrase)
        .then((products) => {
          this.products = products;
        });
    });
  }
}
