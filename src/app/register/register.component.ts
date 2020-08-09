import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from '../user';
import {UserService} from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted  =  false;
  user: User = new User();
  title = 'FormValidation';  
  mobNumberPattern = "^[0-9]{10}$";
  passwordPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8}$"

  constructor(private router: Router,
             private formBuilder: FormBuilder,
             private userService: UserService) { }

  ngOnInit() {
   /* this.authForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['',Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      phoneNumber: ['',Validators.required]
  });*/

  this.authForm = new FormGroup({
    email : new FormControl('', [
      Validators.required,
      Validators.email
     ]),
     password : new FormControl('', [
      Validators.required
    //  Validators.pattern(this.passwordPattern)
     ]),
     firstName : new FormControl('', [
      Validators.required,
      Validators.maxLength(18),
     ]),
     lastName : new FormControl('', [
      Validators.required,
      Validators.maxLength(18),
     ]),
     userName : new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('^[0-9]{8}$')
     ]),
     phoneNumber : new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(this.mobNumberPattern)
     ]),
  });
}

  newUser(): void {
    this.isSubmitted = false;
    this.user = new User();
  }
  
  get formControls() { 
    return this.authForm.controls;
   }

   get userName(){return this.authForm.get('userName');}
   get password(){return this.authForm.get('password');}
   get email(){return this.authForm.get('email');}
   get firstName(){return this.authForm.get('firstName');}
   get lastName(){return this.authForm.get('lastName');}
   get phoneNumber(){return this.authForm.get('phoneNumber');}

  signIn(){
    this.isSubmitted = true;
    this.router.navigateByUrl('/');
  }
  
  signUp(){
  //console.log(user);
  this.isSubmitted = true;
  if(this.authForm.invalid){
    console.log('invalid');
    return;

  }
  console.log(this.user.password);
  this.userService.register(this.authForm.value)
  .subscribe(data => console.log(data), error => console.log(error));
  this.router.navigateByUrl('/')
  alert('register successfully!');
  }

}
