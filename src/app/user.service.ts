import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';
import { Add_Location } from './add_location';


const headers = new HttpHeaders()
                   .set('content-type', 'application/json');
                   
                
                   
@Injectable({
  providedIn: 'root'
})


export class UserService {

  private baseUrl = 'https://blooming-journey-25911.herokuapp.com';  
  formData  : Add_Location;
  location_Name : String;
  url: String;
  constructor(private http:HttpClient) {
    this.formData= new Add_Location;
   }

  login(username, password) {
  console.log("UserService");
  
  return this.http.get<any>(this.baseUrl + '/employeeLogin?' + 'userName=' +username+ '&passWord='+password,{ 'headers': headers });
 }

 register(user: Object)
 {
   console.log("register service")
   console.log(user);
   //this.baseUrl = 'employeeRegister/admin';
   return this.http.post(this.baseUrl + '/employeeRegister/admin', user,{ 'headers': headers } );
 }

 logOut()
 {
   console.log("Admin logout service")
   return this.http.get(this.baseUrl + '/employeeLogout');
 }

 fetchData():Observable <Add_Location[]>{
  // return this.http.get(this.baseUrl+'/locations',{ 'headers': headers });
  return this.http.get<Add_Location[]>(this.baseUrl+'/locations',{ 'headers': headers });
 }

 setLocation(location: String){
   this.formData.locationName=location;
   console.log(location);
 }
 getLocation(): String{

  return this.formData.locationName;

 }

 fetchLocation():Observable <Add_Location[]>
    {
      this.location_Name=this.getLocation();
      let param:String = this.getLocation();
      console.log("param="+this.location_Name);
      this.url=this.baseUrl+'/locations/'+param;
      console.log(this.url);
    return this.http.get<Add_Location[]>(this.baseUrl+'/locations/'+param,{ 'headers': headers });
    }

    postLocation(data): Observable <Add_Location>{ 
    
      console.log(data);
      
      return this.http.post<any>(this.baseUrl+'/addLocations', data,{ 'headers': headers });
      
    }
}
