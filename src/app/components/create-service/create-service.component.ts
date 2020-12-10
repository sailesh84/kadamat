import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class CreateServiceComponent implements OnInit {
	
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  emailid; 
   formdata;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
	
	this.formdata = new FormGroup({ 
         emailid: new FormControl(),
         passwd: new FormControl() 
      }); 
  }
onClickSubmit(data){	
		alert("Entered Email id : " + data.location); 
	}
	// onClickSubmit2(data) {this.emailid = data.emailid;}
}
