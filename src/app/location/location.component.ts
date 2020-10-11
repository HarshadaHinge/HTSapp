import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, from } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { Add_Location } from '../add_location';
import { NgIf } from '@angular/common';
import { Router,RouterOutlet } from  '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { 
    //this.formData= new Add_Location();
  }

  formData: Add_Location ;
   message: string;
   id: number;
  public results=[];
  
  ngOnInit(): void {
    this.userService.fetchData().subscribe(data => this.results=data);
  }

  logOut(){
    console.log("logout btn click!")
    if(confirm("Are you sure you wish to logout?")){
    this.userService.logOut()
    .subscribe(
      (data)=>console.log(data),error => console.log(error));
      this.router.navigateByUrl('/')
    }
  }

deleteRecord(index){
  var place=document.getElementById('placeName'+index).innerText;

  this.userService.deleteLocation(place).subscribe(response => {
    
    
    },
   (error: any) => console.log(error)
    );
  
}
}
