import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './navbar/signin/signin.component';
import { AboutComponent } from './navbar/about/about.component';
import {NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';


const routes: Routes = [
 {path:'', redirectTo:"home", pathMatch:"full"},
 { path: "home", component : HomeComponent},
{ path:'signin', component : SigninComponent},
{ path:"about" , component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomeComponent, SigninComponent,AboutComponent]
