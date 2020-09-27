import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { from, Observable } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';
import { Add_Location } from './location_add';

const headers = new HttpHeaders()
                   .set('content-type', 'application/json');
                   
                
                   
@Injectable({
  providedIn: 'root'
})


export class UserService {

  private baseUrl = 'https://blooming-journey-25911.herokuapp.com';  
  productObj:object = {};
  isAdded: boolean = false;
  formData  : Add_Location;
  list: Add_Location[];

  constructor(private http:HttpClient) {
   
   }
   fetchData(){
    return this.http.get(this.baseUrl+'/locations',{ 'headers': headers });
  }
  postLocation(data): Observable <Add_Location>{ 
    
    console.log(data);
    
    return this.http.post<any>(this.baseUrl+'/addLocations', data,{ 'headers': headers });
    
  }


  login(username, password) {
  console.log("UserService");
  
  return this.http.get<any>(this.baseUrl + '/loginUser?' + 'userName=' +username+ '&passWord='+password,{ 'headers': headers });
 }

 register(user: Object)
 {
   console.log("register service")
   console.log(user);
   //this.baseUrl = 'employeeRegister/admin';
   return this.http.post(this.baseUrl + '/employeeRegister/admin', user,{ 'headers': headers } );
 }

 


}
