import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, from } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
//import { FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { NgForm } from '@angular/forms';
import { Add_Location } from '../add_location';
import { FormsModule }   from '@angular/forms';
import { Router,RouterOutlet } from  '@angular/router';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, public user: UserService, public formsModule: FormsModule, private router: Router) { }

  newLocation: Add_Location;
  isAdded: boolean = false;

  ngOnInit(): void {
  }

  logOut(){
    console.log("logout btn click!")
    if(confirm("Are you sure you wish to logout?")){
    this.user.logOut()
    .subscribe(
      data=>console.log(data),error => console.log(error));
      this.router.navigateByUrl('/')
    }
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
