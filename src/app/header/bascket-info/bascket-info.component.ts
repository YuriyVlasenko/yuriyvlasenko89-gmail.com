import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import routerPaths from '../../routerPaths.const';
import { BascketService, Bascket } from 'src/app/services/bascket.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-bascket-info',
  templateUrl: './bascket-info.component.html',
  styleUrls: ['./bascket-info.component.scss'],
})
export class BascketInfoComponent implements OnInit {
  private bascket: Bascket = new Bascket();

  constructor(private router: Router, private basketService: BascketService) {}

  ngOnInit(): void {
    this.bascket = this.basketService.getBasket();
  }

  getTotalPrice() {
    return this.bascket.getTotalPrice();
  }
  getTotalCount() {
    return this.bascket.getTotalCount();
  }
  openBascket() {
    this.router.navigateByUrl(routerPaths.BASCKET);
  }
}
