import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
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
    ){ }

  ngOnInit() {
    /*    this.authForm  =  this.formBuilder.group({
        userName: ['', Validators.required,Validators.pattern('^[0-9]{8}$')],
        password: ['', Validators.required]
    });*/
    this.authForm = new FormGroup({
      userName : new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^[0-9]{8}$')
       ]),
       password : new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32)
       ]),
    });
  }
   
   get userName(){return this.authForm.get('userName');}
   get password(){return this.authForm.get('password');}
 

    get formControls() { 
      return this.authForm.controls;
     }

     signIn(){
      this.isSubmitted = true;
      console.log('in signIn function');
      if(this.authForm.invalid){
        console.log('invalid');
        return;

      }
      this.userService.login(this.userName.value,this.password.value)
      .subscribe(
        data=>{
               this.router.navigateByUrl('/admin');
        },
        error => console.log(error));  
      }

      SignUp(){
      this.router.navigateByUrl('/register');
      }
}

  



