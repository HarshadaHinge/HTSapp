import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LocationComponent } from './location/location.component';
import { GetLocationComponent } from './get-location/get-location.component';
import { AddLocationComponent } from './add-location/add-location.component'
import { LocationUpdateComponent } from './location-update/location-update.component';

const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'location', component: LocationComponent},
  {path: 'location-add', component: AddLocationComponent},
  {path: 'location-name', component: GetLocationComponent},
  {path: 'location-update', component: LocationUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
