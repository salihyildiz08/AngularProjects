import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/components/login/login.component';
import { RegisterComponent } from './components/auth/components/register/register.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/components/products/products.component';
import { ProductAddComponent } from './components/products/components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/products/components/product-update/product-update.component';
import { BasketComponent } from './components/baskets/components/basket/basket.component';
import { OrdersComponent } from './components/orders/components/orders/orders.component';

export const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"",
    component:LayoutsComponent,
    children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"categories",
        component:CategoriesComponent
      },
      {
        path:"products",
        component:ProductsComponent
      },
      {
        path:"products/add",
        component:ProductAddComponent
      },
      {
        path:"products/update/:value",
        component:ProductUpdateComponent
      },
      {
        path:"baskets",
        component:BasketComponent
      },
      {
        path:"orders",
        component:OrdersComponent
      }
    ]
  },

];
