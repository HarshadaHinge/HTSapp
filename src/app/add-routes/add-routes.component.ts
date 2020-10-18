import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Add_Routes } from '../add_routes';
import { UserService } from '../user.service';
import { FormsModule }   from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.component.html',
  styleUrls: ['./add-routes.component.css']
})
export class AddRoutesComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, public user: UserService, public formsModule: FormsModule, private router: Router) {
    /*this.form = this.formBuilder.group({
      id: [''],
      routeNumber: [null],
      routeName: [null],
      busCapacity: [null],
      boradingLocations: [null],
      dropLocations: [null],
      cost: [null],
    })*/
   }
  newLocation: Add_Routes;
  isAdded: boolean = false;
  addForm: FormGroup;
  newRoutes: Add_Routes;
  ngOnInit(): void {
  }

  onSubmit():void{

  }

  get routeNumber(){return this.form.get('routeNumber');}
 // get password(){return this.authForm.get('password');}
 

  addRouteClick(){
    alert("Routes added successfully!");
    this.router.navigate(['admin/routes']);
  }


  insertRecord(productData:NgForm){
    //this.user.postLocation(form.value).subscribe((res : Add_Routes) => {
    //this.toastr.success('Inserted successfully', 'EMP. Register');
   //////// this.isAdded=true;
    
 // },
  //(error: any) => console.log(error)
  //);
  
  console.log(productData.value);
  
  this.user.postRoutes(productData.value).subscribe((res : Add_Routes) => {
    //this.toastr.success('Inserted successfully', 'EMP. Register');
    this.isAdded=true;
    
    },
   (error: any) => console.log(error)
    );
  alert("Routes added successfully!");
  this.router.navigate(['admin/routes']);
}

}
