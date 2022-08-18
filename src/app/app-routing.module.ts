import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [

  {path: '', component:SignUpComponent},
  {path: 'home', component:HomeComponent},
  {path: 'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path: 'payment', component:PaymentComponent}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
