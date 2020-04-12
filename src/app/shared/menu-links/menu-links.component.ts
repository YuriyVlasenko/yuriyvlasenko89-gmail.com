import { Component, OnInit, Input } from '@angular/core';
import routerPaths from '../../routerPaths.const';

class MenuLink {
  constructor(public label: string, public path: string[]) {}
}

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.scss'],
  host: { class: 'menu-links', '[class.vertical]': 'vertical' },
})
export class MenuLinksComponent implements OnInit {
  @Input('vertical') vertical: boolean = false;

  public menuLinks: MenuLink[] = [];
  constructor() {}

  ngOnInit(): void {
    this.menuLinks.push(new MenuLink('Главная', [`${routerPaths.BASE}`]));
    this.menuLinks.push(new MenuLink('Галерея', [`${routerPaths.GALLERY}`]));
    this.menuLinks.push(
      new MenuLink('Наши партнеры', [`${routerPaths.PARTNERS}`])
    );
    this.menuLinks.push(
      new MenuLink('Доставка и оплата', [`${routerPaths.DELIVERY}`])
    );
  }
}
