import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  provideServices:any = [];
  unitList:any = [];
  preferredTime:any = [];
  nationalityList:any = [];
  genderList:any = [];
  materialList:any = [];
  showForm1: boolean = true;
  showForm2: boolean = false;
  showForm3: boolean = false;
  showForm4: boolean = false;
  formOneFormGroup: FormGroup;
  formTwoFormGroup: FormGroup;
  formThreeFormGroup: FormGroup;
  formOneData:any = {};
  formTwoData:any = {};
  formThreeData:any = {};
  popMessage: String;

  constructor(private dataServices: DataServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.preferredTime = [
      {pTimeId:1, pTimeValue:"Options"},
      {pTimeId:2, pTimeValue:"Options"},
      {pTimeId:3, pTimeValue:"Options"},
      {pTimeId:4, pTimeValue:"Options"}
    ];

    this.nationalityList = [
      {nationalityId:1, nationalityName:"Options"},
      {nationalityId:2, nationalityName:"Options"},
      {nationalityId:3, nationalityName:"Options"},
      {nationalityId:4, nationalityName:"Options"},
      {nationalityId:5, nationalityName:"Options"},
      {nationalityId:6, nationalityName:"Options"},
      {nationalityId:7, nationalityName:"Options"},
      {nationalityId:8, nationalityName:"Options"},
      {nationalityId:9, nationalityName:"Options"},
      {nationalityId:10, nationalityName:"Options"},
    ];

    this.genderList = [
      {genderId:1, genderName:"Male"},
      {genderId:2, genderName:"Female"},
    ];

    this.materialList = [
      {materialId:1, materialName:"Options"},
      {materialId:2, materialName:"Options"},
    ];

    this.getServicesData();
    this.getUnitData();

    this.formOneFormGroup = this.formBuilder.group({
      selectArea: ['', [Validators.required]],
      selectLocation: ['', [Validators.required]],
      servicesList: [''],
      unitList: [''],
      noOfWorkers: ['', [Validators.required]]
    });

    this.formTwoFormGroup = this.formBuilder.group({
      description: [''],
      preferredTime: [''],
      promoCode: ['']
    });

    this.formThreeFormGroup = this.formBuilder.group({
      nty: ['', [Validators.required]],
      gnd: ['', [Validators.required]],
      dailyHours: [''],
      mtrl: ['', [Validators.required]],
      noOfDaysReq: ['']
    });

  }

  getServicesData(){
    this.dataServices.getServiceListData().subscribe((res:any) => {
      console.log(res);
      if(res){
        this.provideServices = res;
      }
    });
  }

  getUnitData(){
    this.dataServices.getUnitList().subscribe((res:any) => {
      console.log(res);
      if(res){
        this.unitList = res;
      }
    });
  }

  form1(){
    console.log(this.formOneFormGroup.value);
  }

  form2(){
    console.log(this.formTwoFormGroup.value);
  }

  form3(){
    console.log(this.formThreeFormGroup.value);
  }

  orderCreation(){
    this.formOneData = this.formOneFormGroup.value;
    this.formTwoData = this.formTwoFormGroup.value;
    this.formThreeData = this.formThreeFormGroup.value;

    let oData = {
      // location: this.formOneData.selectLocation,
      unid: "1",
      cid: "1",
      subid: "1",
      no_of_workers: this.formOneData.noOfWorkers,
      nationality: "1",
      worker_gender: "1",
      materials: "1",
      days_required: this.formThreeFormGroup.value.noOfDaysReq,
      tfeID:"1",
      request_description: this.formTwoData.description,
      problem_photo:"https://sim.is/wp-content/uploads/2013/11/dummy-image-landscape.jpg",
      promo_code: this.formTwoData.promoCode
    }
    console.log(oData);

    this.dataServices.createOrder(oData).subscribe((res:any) =>{
      console.log('create order response', res);
      if (res && res.status == 200) {
        this.popMessage = '<i class="fa fa-check-circle icon" aria-hidden="true"></i>' + res.message;
        setTimeout(() => {
          this.popMessage = '';
          this.formOneFormGroup.reset();
          this.formTwoFormGroup.reset();
          this.formThreeFormGroup.reset();
          window.location.reload();
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
