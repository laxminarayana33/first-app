import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { WellcomeComponent } from './wellcome/wellcome.component'
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    CartComponent,
    WellcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
