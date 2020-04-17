import { DataService } from '../services/repositories/data-service';
import { TableSettings } from './table/table.component';
import { MatDialog } from '@angular/material/dialog';

export class EntityBaseOperation<T> {
  dataSource: T[] = [];
  tableSettings: TableSettings;

  constructor(
    public dialog: MatDialog,
    public dataService: DataService<T>,
    private dialogComponent
  ) {}

  protected loadData() {
    this.dataService.getItems().then((items) => {
      this.dataSource = items;
    });
  }

  protected edit(item) {
    this.showDialog(item).then((dialogResult) => {
      console.log('dialogResult', dialogResult);
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

  protected create(item) {
    this.showDialog(item).then((dialogData) => {
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

  private showDialog(productPart) {
    let dialogRef = this.dialog.open(this.dialogComponent, {
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
