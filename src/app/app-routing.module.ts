import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApprovalComponent } from './approvals/admin-approval/admin-approval.component';
import { SigninComponent } from './Auth/signin/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './crud/products/add-product/add-product.component';
//import { ShowProductsComponent } from './crud/products/show-products/show-products.component';
import { UpdateProductComponent } from './crud/products/update-product/update-product.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import {HomePageComponent} from "./home-page/home-page.component"
import {ProductsComponent} from "./products/products.component"
import { ProductstatusComponent } from './products/productstatus/productstatus.component';
import { SingleProductPageComponent } from './products/single-product-page/single-product-page.component';

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "products/:id", component: SingleProductPageComponent},
  {path: "products", component: ProductsComponent},
  {path: "cart", component: CartComponent},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SignupComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "userdashboard", component: UserDashboardComponent},
  {path: "approval-list", component: AdminApprovalComponent},
  {path: "add-product", component: AddProductComponent},
  // {path: "show-productlist", component: ShowProductsComponent},
  {path: "update-productlist", component: UpdateProductComponent},
  {path: "productStatus", component: ProductstatusComponent},
  
  // {path: "**", component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
