import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchComponent } from './header/search/search.component';
import { BascketComponent } from './bascket/bascket.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'delivery',
    component: DeliveryComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'bascket',
    component: BascketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
