import { Component, OnInit } from '@angular/core';
import { TableSettings, TableColumnSettings } from '../table/table.component';
import {
  ProductsService,
  Product,
  ProductSize,
} from 'src/app/services/repositories/products.service';
import { EntityBaseOperation } from '../entity-base-operation';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {
  ProductCategoriesService,
  ProductCategory,
} from 'src/app/services/repositories/product-categories.service';
import {
  ProductOptionsService,
  ProductOption,
} from 'src/app/services/repositories/product-options.service';
import {
  ProductPartsService,
  ProductPart,
} from 'src/app/services/repositories/product-parts.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent extends EntityBaseOperation<Product>
  implements OnInit {
  private categoriesMap = {};
  private categories: ProductCategory[] = [];
  private productOptions: ProductOption[] = [];
  private productParts: ProductPart[] = [];

  constructor(
    public dialog: MatDialog,
    private productsService: ProductsService,
    private productCategoriesService: ProductCategoriesService,
    private productOptionsService: ProductOptionsService,
    private productPartsService: ProductPartsService
  ) {
    super(dialog, productsService, ProductDialogComponent, (item) =>
      this.initCategory(item)
    );

    this.productPartsService.getItems().then((productParts) => {
      this.productParts = productParts;
    });

    this.productOptionsService.getItems().then((productOptions) => {
      this.productOptions = productOptions;
    });

    this.productCategoriesService.getItems().then((categories) => {
      this.categories = categories;
      this.categoriesMap = {};
      categories.forEach((category) => {
        this.categoriesMap[category.id] = category.title;
      });
    });
  }

  ngOnInit(): void {
    this.loadData();

    let columns = [
      new TableColumnSettings('Название', 'title'),
      new TableColumnSettings('Описание', 'description'),
      new TableColumnSettings('Категория', 'category'),
      new TableColumnSettings('Цена', 'price'),
      new TableColumnSettings(
        'Изображения',
        'imageUrls',
        true,
        undefined,
        'image'
      ),
    ];
    this.tableSettings = new TableSettings(columns);
  }

  onEdit(item) {
    this.edit(Product.clone(item), {
      width: '1000px',
      dictionaries: {
        categories: this.categories,
        productParts: this.productParts,
        productOptions: this.productOptions,
      },
    });
  }

  onRemove(item) {
    this.remove(item.id);
  }
  onCreate() {
    this.create(
      new Product(
        '',
        '',
        '',
        '',
        0,
        [],
        new ProductSize('0', '0', '0'),
        [],
        []
      ),
      {
        width: '600px',
        dictionaries: {
          categories: this.categories,
          productParts: this.productParts,
          productOptions: this.productOptions,
        },
      }
    );
  }

  private initCategory(product) {
    product.category = this.categoriesMap[product.categoryId];
    return product;
  }
}
