import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { LogoComponent } from './shared/logo/logo.component';
import { MenuLinksComponent } from './shared/menu-links/menu-links.component';
import { SearchComponent } from './header/search/search.component';
import { MainComponent } from './main/main.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PartnersComponent } from './main/partners/partners.component';
import { BascketInfoComponent } from './header/bascket-info/bascket-info.component';
import { CategoriesListComponent } from './main/categories-list/categories-list.component';
import { CategoryItemComponent } from './main/category-item/category-item.component';
import { ProductsListComponent } from './shared/products-list/products-list.component';
import { ProductItemComponent } from './shared/product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BascketItemComponent } from './bascket/bascket-item/bascket-item.component';
import { BascketComponent } from './bascket/bascket.component';
import { CounterComponent } from './shared/counter/counter.component';
import { CreateOrderComponent } from './bascket/create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    LogoComponent,
    MenuLinksComponent,
    SearchComponent,
    MainComponent,
    DeliveryComponent,
    ContactsComponent,
    GalleryComponent,
    PartnersComponent,
    BascketInfoComponent,
    CategoriesListComponent,
    CategoryItemComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    BascketItemComponent,
    BascketComponent,
    CounterComponent,
    CreateOrderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxImageGalleryModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
