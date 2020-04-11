import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import routerPaths from '../routerPaths.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { class: 'header' },
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(searchPhrase) {
    this.router.navigateByUrl(`${routerPaths.SEARCH}/${searchPhrase}`);
  }
}
