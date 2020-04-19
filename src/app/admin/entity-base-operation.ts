import { DataService } from '../services/repositories/data-service';
import { TableSettings } from './table/table.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductCategory } from '../services/repositories/product-categories.service';
import { ProductPart } from '../services/repositories/product-parts.service';
import { ProductOption } from '../services/repositories/product-options.service';

export interface DialogData<T> {
  itemData: T;
  dictionaries: {
    categories: ProductCategory[];
    productParts: ProductPart[];
    productOptions: ProductOption[];
  };
}

export class EntityBaseOperation<T> {
  dataSource: T[] = [];
  tableSettings: TableSettings;

  constructor(
    public dialog: MatDialog,
    public dataService: DataService<T>,
    private dialogComponent,
    private mapItem = null
  ) {}

  protected loadData() {
    this.dataService.getItems().then((items) => {
      this.dataSource = this.mapItem ? items.map(this.mapItem) : items;
    });
  }

  protected edit(item, dialogSettings) {
    this.showDialog(item, dialogSettings).then((dialogResult) => {
      if (dialogResult) {
        this.dataService
          .editItem(dialogResult as T)
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

  protected remove(itemId) {
    this.dataService
      .deleteItem(itemId)
      .then(() => {
        this.dataSource = this.dataSource.filter(
          (part) => part['id'] !== itemId
        );
      })
      .catch((error) => {
        // TODO: show alert
        console.log('error', error);
      });
  }

  protected create(item, dialogSettings) {
    this.showDialog(item, dialogSettings).then((dialogData) => {
      if (dialogData) {
        this.dataService
          .createItem(dialogData as T)
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

  private showDialog(
    itemData,
    dialogSettings = { width: '400px', dictionaries: {} }
  ) {
    let dialogRef = this.dialog.open(this.dialogComponent, {
      width: dialogSettings.width || '400px',
      data: {
        itemData,
        dictionaries: dialogSettings && dialogSettings.dictionaries,
      },
    });

    return new Promise((resolve, reject) => {
      dialogRef.afterClosed().subscribe((itemData) => {
        itemData ? resolve(itemData) : resolve(null);
      });
    });
  }
}
