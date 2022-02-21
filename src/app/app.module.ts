import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemsComponent } from './products/product-items/product-items.component';
import { SingleProductPageComponent } from './products/single-product-page/single-product-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './Auth/signup/signup/signup.component';
import { SigninComponent } from './Auth/signin/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnersComponent } from './shared/spinners/spinners.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { MainContentComponent } from './dashboard/main-content/main-content.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { ToggleSwitchComponent } from './shared/toggle/toggle-switch/toggle-switch.component';
import { AddProductComponent } from './crud/products/add-product/add-product.component';
import { UpdateProductComponent } from './crud/products/update-product/update-product.component';
import { DeleteProductComponent } from './crud/products/delete-product/delete-product.component';
//import { ShowProductsComponent } from './crud/products/show-products/show-products.component';
import { ShowUsersComponent } from './crud/users/show-users/show-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminApprovalComponent } from './approvals/admin-approval/admin-approval.component';
import { ProductstatusComponent } from './products/productstatus/productstatus.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    FooterComponent,
    HomePageComponent,
    ProductsComponent,
    ProductItemsComponent,
    SingleProductPageComponent,
    CartComponent,
    SignupComponent,
    SigninComponent,
    SpinnersComponent,
    DashboardComponent,
    SidebarComponent,
    MainContentComponent,
    UserDashboardComponent,
    ToggleSwitchComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    //ShowProductsComponent,
    ShowUsersComponent,
    AdminApprovalComponent,
    ProductstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
