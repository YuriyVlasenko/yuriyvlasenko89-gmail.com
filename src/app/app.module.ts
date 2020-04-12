import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
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
import { PartnersComponent } from './partners/partners.component';
import { BascketInfoComponent } from './header/bascket-info/bascket-info.component';
import { CategoriesListComponent } from './main/categories-list/categories-list.component';
import { CategoryItemComponent } from './main/category-item/category-item.component';
import { ProductsListComponent } from './shared/products-list/products-list.component';
import { ProductItemComponent } from './shared/product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BascketItemComponent } from './bascket/bascket-item/bascket-item.component';
import { BascketComponent } from './bascket/bascket.component';
import { CounterComponent } from './shared/counter/counter.component';
import { ImageComponent } from './shared/image/image.component';
import { OrderComponent } from './order/order.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AdminComponent } from './admin/admin.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { AdminPartnersComponent } from './admin/admin-partners/admin-partners.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminProductOptionsComponent } from './admin/admin-product-options/admin-product-options.component';
import { AdminProductPartsComponent } from './admin/admin-product-parts/admin-product-parts.component';
import { TableComponent } from './admin/table/table.component';

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
    ImageComponent,
    OrderComponent,
    SearchResultComponent,
    AdminComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    AdminGalleryComponent,
    AdminPartnersComponent,
    AdminCategoriesComponent,
    AdminProductOptionsComponent,
    AdminProductPartsComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxImageGalleryModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    Angular2ImageGalleryModule,
    MatTabsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
