import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, from } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { Add_Location } from '../add_location';
import { NgIf } from '@angular/common';
import { Router,RouterOutlet } from  '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  formData: Add_Location ;
   message: string;
   id: number;
  public results: any;
  
  ngOnInit(): void {
    this.userService.fetchEmployeeData().subscribe(data => this.results=data);
    console.log(this.results);
  }

  logOut(){
    console.log("logout btn click!")
    if(confirm("Are you sure you wish to logout?")){
    this.userService.logOut()
    .subscribe(
      (data)=>console.log(data),error => alert("Sorry we are facing some issue! Please try later"));
      this.router.navigateByUrl('/')
    }
  }

}
