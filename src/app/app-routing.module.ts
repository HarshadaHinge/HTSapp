import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RoutesComponent } from './routes/routes.component';
import { AddRoutesComponent } from './add-routes/add-routes.component';
import { ShowRoutesComponent } from './show-routes/show-routes.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path: 'admin', component: AdminComponent,
  children:[
    {path:'routes',component:RoutesComponent},
    {path:'add-routes',component:AddRoutesComponent},
    {path:'show-routes',component:ShowRoutesComponent}
  ]},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
