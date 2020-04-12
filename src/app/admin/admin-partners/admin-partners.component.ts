import { Component, OnInit } from '@angular/core';
import { TableColumnSettings, TableSettings } from '../table/table.component';
import { PartnersService } from 'src/app/services/repositories/partners.service';

@Component({
  selector: 'app-admin-partners',
  templateUrl: './admin-partners.component.html',
  styleUrls: ['./admin-partners.component.scss'],
})
export class AdminPartnersComponent implements OnInit {
  public tableSettings: TableSettings;
  public dataSource: object[] = [];

  constructor(private partersService: PartnersService) {}

  ngOnInit(): void {
    this.partersService.getItems().then((partners) => {
      this.dataSource = partners;
    });

    let columns = [
      new TableColumnSettings('Название', 'name'),
      new TableColumnSettings('Область', 'region'),
      new TableColumnSettings('Город', 'city'),
      new TableColumnSettings('Адресс', 'address'),
      new TableColumnSettings('Контакты', 'contacts'),
    ];

    this.tableSettings = new TableSettings(columns);
  }

  onEdit(item) {
    console.log('edit', item);
  }
  onRemove(item) {
    console.log('remove', item);
  }
  onCreate(item) {
    console.log('create', item);
  }
}
