import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchComponent } from './header/search/search.component';
import { BascketComponent } from './bascket/bascket.component';
import RouterPaths from './routerPaths.const';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: RouterPaths.BASE,
    component: MainComponent
  },
  {
    path: `${RouterPaths.CATEGORY}/:categoryName`,
    component: MainComponent
  },
  {
    path: RouterPaths.CONTACTS,
    component: ContactsComponent
  },
  {
    path: `${RouterPaths.PRODUCT}/:productId`,
    component: ProductDetailsComponent
  },
  {
    path: RouterPaths.GALLERY,
    component: GalleryComponent
  },
  {
    path: RouterPaths.DELIVERY,
    component: DeliveryComponent
  },
  {
    path: RouterPaths.SEARCH,
    component: SearchComponent
  },
  {
    path: RouterPaths.BASCKET,
    component: BascketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
