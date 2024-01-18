import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginOrsignupComponent } from './Components/login-orsignup/login-orsignup.component';
import { ForgotPwdComponent } from './Components/forgot-pwd/forgot-pwd.component';
import { ResetPwdComponent } from './Components/reset-pwd/reset-pwd.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';
import { GetBookComponent } from './Components/get-book/get-book.component';
import { CartBooksComponent } from './Components/cart-books/cart-books.component';
import { OrderPageComponent } from './Components/order-page/order-page.component';

const routes: Routes = [
  {path : 'loginOrsignup', component : LoginOrsignupComponent},
  {path : 'forgotpwd', component : ForgotPwdComponent},
  {path : 'resetpwd/:token', component : ResetPwdComponent},
  {path : 'dashboard', component : DashboardComponent,
   children:[
    {
      path : '',redirectTo:"/dashboard/books", pathMatch:'full'
    },
    {path : 'books', component : DisplayBooksComponent},
    {path : 'book', component : GetBookComponent},
    {path : 'cart', component : CartBooksComponent},
    {path : 'order', component : OrderPageComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
