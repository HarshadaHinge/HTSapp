import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';

import { Add_Location } from './add_location';
import { Add_Routes } from './add_routes';




const headers = new HttpHeaders()
                   .set('content-type', 'application/json');
                   
                
                   
@Injectable({
  providedIn: 'root'
})


export class UserService {

  private baseUrl = 'https://blooming-journey-25911.herokuapp.com';  
  formData  : Add_Location;

  RouteName: String;
  location_Name : String;
  url: String;
  public store: String;
  addRouteData  : Add_Routes
  constructor(private http:HttpClient) {
    this.formData= new Add_Location;
    this.addRouteData = new Add_Routes;
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

 getAllLocations():Observable <Add_Location[]>{
  // return this.http.get(this.baseUrl+'/locations',{ 'headers': headers });
  return this.http.get<Add_Location[]>(this.baseUrl+'/locations',{ 'headers': headers });
 }
  
 logOut()
 {
   console.log("Admin logout service")
   return this.http.get(this.baseUrl + '/employeeLogout');
 }


 fetchLocationforRoutes():Observable <Add_Location[]>
  {
    this.location_Name=this.getLocation();
      let param:String = this.getLocation();
      console.log("param="+this.location_Name);
      this.url=this.baseUrl+'/locations/'+param;
      console.log(this.url);
    return this.http.get<Add_Location[]>(this.baseUrl+'/locations/'+param,{ 'headers': headers });
  }
  

  setLocation(location: String){
    this.formData.locationName=location;
    console.log(location);
  }
  getLocation(): String{
 
   return this.formData.locationName;
 
  }

  

  getRouteDetails(location):Observable<Add_Routes[]>
  {
      this.url=this.baseUrl+'/routes/'+location;
      console.log(this.url);
    return this.http.get<Add_Routes[]>(this.baseUrl+'/routes/'+location,{ 'headers': headers });
  }

  postRoutes(data): Observable <Add_Routes>{ 
    
    console.log(data);
    
    
    return this.http.post<any>(this.baseUrl+'/addRoutes', data,{ 'headers': headers });
    
  }

 fetchData():Observable <Add_Location[]>{

  return this.http.get<Add_Location[]>(this.baseUrl+'/locations',{ 'headers': headers });
 }


 fetchLocation(placeName):Observable <Add_Location>
    {
     
      var param=placeName;
      return this.http.get<Add_Location>(this.baseUrl+'/locations/'+param,{ 'headers': headers });
    }

    postLocation(data): Observable <Add_Location>{ 
    
      console.log(data);
      
      return this.http.post<any>(this.baseUrl+'/addLocations', data,{ 'headers': headers });
      
    }

    updateLocation(location,data: Add_Location): Observable<any> {
      var param=location;
      console.log(param);
      return this.http.put(this.baseUrl+'/updateLocation/'+param,data,{ 'headers': headers });
    }
    deleteLocation(location):Observable<any>{
      var param=location;
      console.log(param);
      return this.http.delete(this.baseUrl+'/deleteLocation/'+param,{ 'headers': headers });
    }
    fetchEmployeeData():Observable <any>{
     return this.http.get<any>(this.baseUrl+'/RegisteredEmployeeInfo/45023849',{ 'headers': headers });
     }
}
