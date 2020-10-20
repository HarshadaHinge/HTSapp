import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, from } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { Add_Location } from '../add_location';
import { NgIf } from '@angular/common';
import { Router,RouterOutlet } from  '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UpdateData } from '../updateData';

@Component({
  selector: 'app-location-update',
  templateUrl: './location-update.component.html',
  styleUrls: ['./location-update.component.css']
})
export class LocationUpdateComponent implements OnInit {

  formData: Add_Location;
  
  results2: Add_Location;
  message = '';
  objPuts: UpdateData;
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
    
    updateLocation(dataBody)
    {
      const location: string = this.route.snapshot.queryParamMap.get('location');
      this.userService.updateLocation(location,dataBody.value).subscribe((res : Add_Location) => {
     
       
        
        },
       (error: any) => alert("Sorry we are facing some issue! Please try later")
        );
        alert("Location updated successfully!");
       this.router.navigate(['admin/location']);
    }
  
  
}
