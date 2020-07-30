import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted  =  false;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      
  });
  }
  
  get formControls() { 
    return this.authForm.controls;
   }

  signIn(){
    this.isSubmitted = true;
   
   
    this.router.navigateByUrl('/');
  }

}
