import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './Login_Register/register/register.component';
import { ForgetPasswordComponent } from './Login_Register/forget-password/forget-password.component';
import { ChangePasswordComponent } from './Login_Register/change-password/change-password.component';
import { OrdersComponent } from './Users/Components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
   
    RegisterComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    OrdersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
