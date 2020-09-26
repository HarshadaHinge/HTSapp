import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router,RouterOutlet } from  '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
 
})
export class AdminComponent implements OnInit {
  authForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,private routerOutlet: RouterOutlet) { }

  ngOnInit(): void {
  }
  
  get formControls() { 
    return this.authForm.controls;
   }

   logout(){
    this.router.navigateByUrl('/home');
  }


}
