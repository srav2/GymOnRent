
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
//import {MatToolbarModule, MatButtonModule} from '@angular/material';
//import {DataTableModule} from 'angular-datatable';  
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
//import { HomeComponent } from './navbar/home/home.component';
//import { AboutComponent } from './navbar/about/about.component';
import { CartComponent } from './navbar/cart/cart.component';
//import { SigninComponent } from './navbar/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   //  HomeComponent,
   // AboutComponent,
    CartComponent,
    routingComponent
   // SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
