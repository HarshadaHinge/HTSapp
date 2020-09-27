import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, from } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
//import { FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Add_Location } from '../location_add';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, public user: UserService, public formsModule: FormsModule ) { }

  newLocation: Add_Location;
  isAdded: boolean = false;


  ngOnInit(): void {
   // this.user.fetchData().subscribe(data => this.products=data);    
    
  }
  
   

  insertRecord(form){
      this.user.postLocation(form.value).subscribe((res : Add_Location) => {
      //this.toastr.success('Inserted successfully', 'EMP. Register');
      this.isAdded=true;
      
    },
    (error: any) => console.log(error)
    );
    
    
    
  }
  

}
