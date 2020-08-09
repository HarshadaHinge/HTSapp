import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';


const headers = new HttpHeaders()
                   .set('content-type', 'application/json');
                   
                
                   
@Injectable({
  providedIn: 'root'
})


export class UserService {

  private baseUrl = 'https://blooming-journey-25911.herokuapp.com';  
  

  constructor(private http:HttpClient) {
   
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
