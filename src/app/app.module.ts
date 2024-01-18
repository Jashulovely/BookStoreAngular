import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginOrsignupComponent } from './Components/login-orsignup/login-orsignup.component';


import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';





import { ForgotPwdComponent } from './Components/forgot-pwd/forgot-pwd.component';
import { ResetPwdComponent } from './Components/reset-pwd/reset-pwd.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';
import { GetBookComponent } from './Components/get-book/get-book.component';
import { CartBooksComponent } from './Components/cart-books/cart-books.component';
import { OrderPageComponent } from './Components/order-page/order-page.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginOrsignupComponent,
    ForgotPwdComponent,
    ResetPwdComponent,
    DashboardComponent,
    DisplayBooksComponent,
    GetBookComponent,
    CartBooksComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatIconModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
