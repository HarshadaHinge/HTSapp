import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Add_Location } from '../add_location';
import { LocationComponent } from '../location/location.component';
import { Router,RouterOutlet } from  '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-location',
  templateUrl: './get-location.component.html',
  styleUrls: ['./get-location.component.css']
})
export class GetLocationComponent implements OnInit {

  
  results2: Add_Location;
  constructor(private userService: UserService, private router: Router,private route: ActivatedRoute
    ) { 
  }

  ngOnInit(): void {
    
    const location: string = this.route.snapshot.queryParamMap.get('location');
    this.userService.fetchLocation(location).subscribe(data => 
      {this.results2=data});
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
