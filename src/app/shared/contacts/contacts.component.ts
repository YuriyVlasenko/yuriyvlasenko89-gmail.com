import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  host: { class: 'contacts' },
})
export class ContactsComponent implements OnInit {
  public contacts: object[] = [];

  constructor() {}

  ngOnInit(): void {
    this.contacts.push({ number: '097-859-17-67' });
    this.contacts.push({ number: '050-195-93-37' });
  }
}
