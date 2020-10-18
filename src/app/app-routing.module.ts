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

import { LocationComponent } from './location/location.component';
import { GetLocationComponent } from './get-location/get-location.component';
import { AddLocationComponent } from './add-location/add-location.component'
import { LocationUpdateComponent } from './location-update/location-update.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'


const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path: 'admin', component: AdminComponent,

  children:[
    {path:'routes',component:RoutesComponent},
    {path:'add-routes',component:AddRoutesComponent},
    {path:'show-routes',component:ShowRoutesComponent},
     {path: 'location', component: LocationComponent},
    {path: 'employee-detail', component: EmployeeDetailComponent},
    {path: 'location/location-add', component: AddLocationComponent},
    {path: 'location/location-name', component: GetLocationComponent},
    {path: 'location/location-name/location-update', component: LocationUpdateComponent}
  ]},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
