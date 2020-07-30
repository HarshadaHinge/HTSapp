import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import {UserService} from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted  =  false;

  constructor(private router: Router,
             private formBuilder: FormBuilder,
             private userService: UserService
    ) { }

  ngOnInit() {
    this.authForm  =  this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

    get formControls() { 
      return this.authForm.controls;
     }

     signIn(){
      this.isSubmitted = true;
      if(this.authForm.invalid){
        return;
      }
      this.userService.login(this.formControls.userName.value,this.formControls.password.value)
      .subscribe(
        data=>{
               this.router.navigateByUrl('/admin');
        },
        error => console.log(error));  
      }

    onClick(){
    
      this.router.navigateByUrl('/register');
    }
}

  



