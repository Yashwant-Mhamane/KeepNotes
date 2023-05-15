import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../login-service.service';
import { Myinterface } from '../model/canintf';
import { note } from '../model/note';
import { user } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements Myinterface {
  addressForm = this.fb.group({

    firstName: [null, Validators.required],
    lastName: [null, [Validators.required,Validators.minLength(2)]],
    pass: [null, [Validators.required, Validators.pattern(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    )]],
    cpass: [null,[ Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      )]],
    emailId: [null,[ Validators.required,Validators.email]],
    address: [null, Validators.required],
    age: [null, [Validators.required,Validators.min(18)]],
    phoneNo: [null, [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode:[null,[Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    gender: [null, Validators.required]
    },{validators:this.passwordcheck});

  hasUnitNumber = false;

 get emailId(){
  return this.addressForm.controls.emailId;
 }
 get firstName(){
  return this.addressForm.controls.firstName;
 }
 get lastName(){
  return this.addressForm.controls.lastName;
 }
 get pass(){
  return this.addressForm.controls.pass;

 }
 get cpass() {
  return this.addressForm.controls.cpass;
 }
 get postalCode() {
  return this.addressForm.controls.postalCode;
 }
 get age() {
  return this.addressForm.controls.age;
 }
 get phoneNo() {
  return this.addressForm.controls.phoneNo;
 }
  constructor(private fb: FormBuilder) {}

  canExit(){
          if(this.addressForm.touched){
        var val = confirm("Do you want to leave this page")
         return val;
       }else{
         return false;
       }
  }

  onSubmit(): void {
    alert('Thanks!');
   this.addressForm.reset();
  }

   passwordcheck(ac:AbstractControl)
  { let p=ac.get('pass')?.value
  let cp=ac.get('cpass')?.value
      if((p==cp))
      {
          return null;
      }
      else
      {
          return {matcherror:true}
      }
  }
  userDetail:user={
    name: undefined,
    useremailId: undefined,
    userpass: undefined
  }

  
  // constructor(private userservice:LoginServiceService,private rs:Router,private ar:ActivatedRoute){}

  // ngOnInit(): void {
  //  this.ar.paramMap.subscribe(param=>{
  //   let id=param.get("id") ?? 0
  //   alert(id)
  //   if(id!=0)
  //     this.userservice.getOneEmployee(id).subscribe(data=>this.userDetail=data)
  //  })
  // }

  // addEmployee()
  // {

  //   if(this.userDetail.name == undefined)
  //   {

  //   }
  //   else
  //   {
  //     this.empservice.addEmployee(this.employeedetail).subscribe(data=>{
  //       alert("Employee added"+data.id);
  //       this.rs.navigateByUrl("viewemployees");
  //     })
  //   }
  // }
}
