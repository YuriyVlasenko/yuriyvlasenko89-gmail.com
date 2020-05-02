import { Component, OnInit } from '@angular/core';
import { TableColumnSettings, TableSettings } from '../table/table.component';
import {
  PartnersService,
  Partner,
} from 'src/app/services/repositories/partners.service';
import { EntityBaseOperation } from '../entity-base-operation';
import { MatDialog } from '@angular/material/dialog';
import { PartnersDialogComponent } from './partners-dialog/partners-dialog.component';

@Component({
  selector: 'app-admin-partners',
  templateUrl: './admin-partners.component.html',
  styleUrls: ['./admin-partners.component.scss'],
})
export class AdminPartnersComponent extends EntityBaseOperation<Partner>
  implements OnInit {
  constructor(
    public dialog: MatDialog,
    private partnersService: PartnersService
  ) {
    super(dialog, partnersService, PartnersDialogComponent);
  }

  ngOnInit(): void {
    this.loadData();

    let columns = [
      new TableColumnSettings('Назва', 'name'),
      new TableColumnSettings('Область', 'regionName'),
      new TableColumnSettings('Населений пункт', 'city'),
      new TableColumnSettings('Адреса', 'address'),
      new TableColumnSettings('Контакти', 'contacts'),
      new TableColumnSettings(
        'Изображение',
        'imageUrls',
        true,
        undefined,
        'image'
      ),
    ];

    this.tableSettings = new TableSettings(columns);
  }

  onEdit(item) {
    this.edit(Partner.clone(item), {
      width: '700px',
    });
  }

  onRemove(item) {
    this.remove(item.id);
  }
  onCreate() {
    this.create(new Partner('', '', 0, '', '', '', ''), {
      width: '700px',
    });
  }
}
