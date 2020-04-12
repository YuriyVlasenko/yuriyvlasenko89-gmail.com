import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BascketComponent } from './bascket/bascket.component';
import RouterPaths from './routerPaths.const';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: RouterPaths.ADMIN,
    component: AdminComponent,
  },
  {
    path: RouterPaths.ORDER,
    component: OrderComponent,
  },
  {
    path: `${RouterPaths.CATEGORY}/:categoryName`,
    component: MainComponent,
  },
  {
    path: `${RouterPaths.PRODUCT}/:productId`,
    component: ProductDetailsComponent,
  },
  {
    path: RouterPaths.GALLERY,
    component: GalleryComponent,
  },
  {
    path: RouterPaths.DELIVERY,
    component: DeliveryComponent,
  },
  {
    path: `${RouterPaths.SEARCH}/:searchPhrase`,
    component: SearchResultComponent,
  },
  {
    path: RouterPaths.BASCKET,
    component: BascketComponent,
  },
  {
    path: RouterPaths.BASE,
    component: MainComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
