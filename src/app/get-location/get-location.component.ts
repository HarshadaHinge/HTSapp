import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Add_Location } from '../add_location';
import { LocationComponent } from '../location/location.component';
import { Router,RouterOutlet } from  '@angular/router';

@Component({
  selector: 'app-get-location',
  templateUrl: './get-location.component.html',
  styleUrls: ['./get-location.component.css']
})
export class GetLocationComponent implements OnInit {

  formData: Add_Location;
  loc: LocationComponent;
  public results2=[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    
    this.userService.fetchLocation().subscribe(data => this.results2=data);
  }

  logOut(){
    console.log("logout btn click!")
    if(confirm("Are you sure you wish to logout?")){
    this.userService.logOut()
    .subscribe(
      data=>console.log(data),error => console.log(error));
      this.router.navigateByUrl('/')
    }
  }
}
