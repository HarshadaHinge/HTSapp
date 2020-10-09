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

  constructor(private userService: UserService, private router: Router) { }

  formData  : Add_Location;
   //public results:object ={} ;
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
      data=>console.log(data),error => console.log(error));
      this.router.navigateByUrl('/')
    }
  }

  getRecord(){
    var place=document.getElementById('placeName').innerText;
    this.userService.setLocation(place);
    console.log(place);
  }

}
