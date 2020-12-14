import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../../service/data-service.service';
import { RouterModule, Routes } from '@angular/router';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public apiResponse = {};
  loginForm: FormGroup;
  signUpForm: FormGroup;
  submit: boolean = false;
  submitted: boolean = false;
  popMessage: String;
  openPopup: boolean = false;
  display='none';

  //public data2 = {};
  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    this.dataService.getServiceListData().subscribe((response) => {
      this.apiResponse = response;
      // console.log('response from GET API is ', this.apiResponse);
      //this.data2 = response;
      //console.log("mythreadData rootservice"+this.data2);
    });

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  get signF() { return this.signUpForm.controls; }

  onClickSubmit(data) {
    // alert("Entered Email id : " + data.email);
    console.log(data);
    //this.router.navigate(['/landingpage']);
    // this.show = false;
    //this.model = this.data;
    this.dataService.addProduct(data).subscribe((result) => {
      console.log(result);
      // if ( ! result.error) {
      this.router.navigateByUrl('/create-service');
      // } else {
      //   alert('Some thingh went wrong!');
      // }
    });
  }

  login(userLoginData){
    this.submit = true;
    if (userLoginData.invalid) {
      return;
    } else {
      console.log("userLoginData", userLoginData.value);
    }
  }

  registerUser(userSignupData){
    this.submitted = true;
    if(userSignupData.invalid) {
      return;
    } else {

      // this.router.navigateByUrl('/create-order');
      // this.openPopup = false;


      let regData = {
        u_name: userSignupData.value.name,
        mobile: userSignupData.value.mobileNo,
        u_email: userSignupData.value.emailId,
        u_password: userSignupData.value.password
      };
      console.log("userSignupData", regData);
      this.dataService.userReg(regData).subscribe((res:any) =>{
        console.log('user reg response', res);
        if (res && res.status == 200) {
          this.popMessage = '<i class="fa fa-check-circle icon" aria-hidden="true"></i>' + res.message;
          setTimeout(() => {
            this.popMessage = '';
            this.display='none';
            this.signUpForm.reset();
            this.router.navigateByUrl('/create-order');
          }, 3000);

        }else{
          if (res && res.message) {
            this.popMessage = '<i class="fas fa-exclamation-triangle icon"></i>' + res.message;
            setTimeout(() => {
              this.popMessage = '';
            }, 3000);
          }
        }
      });
    }
  }

  openModalDialog(){
      this.display='block'; //Set block css
      return false;
  }

  closeModalDialog(){
    this.display='none'; //set none css after close dialog
  }

}
