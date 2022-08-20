import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [

  {path: '', component:SignUpComponent},
  {path: 'home', component:HomeComponent},
  {path: 'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'shipping', component:ShippingComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'header', component:HeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
