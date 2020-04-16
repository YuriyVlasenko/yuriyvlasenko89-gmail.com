import { Component, OnInit } from '@angular/core';
import { TableColumnSettings, TableSettings } from '../table/table.component';
import { ProductPartsService, ProductPart } from 'src/app/services/repositories/product-parts.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductPartsDialogComponent } from './product-parts-dialog/product-parts-dialog.component';

export interface ProductPartDialogData {
  productPart: ProductPart;
}

@Component({
  selector: 'app-admin-product-parts',
  templateUrl: './admin-product-parts.component.html',
  styleUrls: ['./admin-product-parts.component.scss'],
})
export class AdminProductPartsComponent implements OnInit {
  public tableSettings: TableSettings;
  public dataSource: ProductPart[] = [];

  constructor(    public dialog: MatDialog,
    private productPartsService: ProductPartsService) {}

    private loadData() {
      this.productPartsService.getItems().then((productParts) => {
        this.dataSource = productParts;
      });
    }


  ngOnInit(): void {
  this.loadData()
    let columns = [new TableColumnSettings('Название компонента', 'name')];
    this.tableSettings = new TableSettings(columns);
  }

  onEdit(item) {
    this.showDialog(ProductPart.clone(item)).then((category) => {
      if (category) {
        this.productPartsService
          .editItem(category as ProductPart)
          .then(() => {
            this.loadData();
          })
          .catch((error) => {
            // TODO: show alert
            console.log('error', error);
          });
      }
    });
  }
  onRemove(item) {
    this.productPartsService
      .deleteItem(item.id)
      .then(() => {
        this.dataSource = this.dataSource.filter((part) => part.id !== item.id);
      })
      .catch((error) => {
        // TODO: show alert
        console.log('error', error);
      });
  }
  onCreate() {
    this.showDialog(new ProductPart('', '')).then((productPart) => {
      if (productPart) {
        this.productPartsService
          .createItem(productPart as ProductPart)
          .then(() => {
            this.loadData();
          })
          .catch((error) => {
            // TODO: show alert
            console.log('error', error);
          });
      }
    });
  }

  private showDialog(productPart) {
    let dialogRef = this.dialog.open(ProductPartsDialogComponent, {
      width: '400px',
      data: { productPart },
    });

    return new Promise((resolve, reject) => {
      dialogRef.afterClosed().subscribe((productPart) => {
        productPart ? resolve(productPart) : resolve(null);
      });
    });
  }
}
