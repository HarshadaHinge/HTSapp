import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router,RouterOutlet } from  '@angular/router';
import {UserService} from '../user.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
 
})
export class AdminComponent implements OnInit {
  authForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private routerOutlet: RouterOutlet,
              private userService: UserService) { }

  ngOnInit(): void {
  }
  
  get formControls() { 
    return this.authForm.controls;
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
