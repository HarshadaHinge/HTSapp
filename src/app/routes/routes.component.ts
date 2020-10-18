import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { User } from '../user';
import { Add_Location } from '../add_location';
import { UserService } from '../user.service';


@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  formData: Add_Location;
  selectedLocation: Add_Location;
  locationName : String;
  show =false;
 // loc: LocationComponent;
  public results2=[];
  public routeDetails=[];
  users: User[];
  constructor(private router: Router,private userService: UserService) { }
  
  ngOnInit(): void {
    //this.userService.fetchLocation().subscribe(data => this.results2=data);
    this.userService.getAllLocations().subscribe(data => this.results2=data)
  }

  addUser() {
    this.router.navigate(['admin/add-routes']);
  };

  


  onSelect(results2: any) {
   this.show=true;
    console.log("Selected route name: ", results2); // You get the Id of the selected item here
   // this.userService.getRouteDetails().subscribe(data => this.results2=data);
   this.userService.getRouteDetails(results2).subscribe
   (data =>this.routeDetails=data,error => console.log(this.routeDetails))
   console.log(this.routeDetails)
  
}

  
  
}
