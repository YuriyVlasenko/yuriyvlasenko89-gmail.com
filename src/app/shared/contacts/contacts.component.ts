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
    this.contacts.push({ number: '095-690-7-666' });
    this.contacts.push({ number: '095-690-7-666' });
    this.contacts.push({ number: '095-690-7-666' });
  }
}
