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
  areasCoveredForServices:any = [];
  selectedFile:File = null;

  selectedArea:any;
  selectedLocation:any;
  selectedServices:any;
  selectedServicesByName:any = [];
  selectedUnit:any;
  selectedUnitByName:any = [];
  selectedNoOfWorkers:any;
  selectedNationality:any;
  selectedNationalityByName:any = [];
  selectedGender:any;
  selectedGenderByName:any = [];
  selectedMaterials:any;
  selectedMaterialsByName:any = [];
  selectedNoOfDays:any;
  selectedPreferredTime:any;
  selectedRequestDescription:any;
  selectedPreferredTimeByName:any = [];

  constructor(private dataServices: DataServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

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
    this.getAreasData();
    this.getTimeData();

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

  getTimeData(){
    this.dataServices.getTimeList().subscribe((res:any) => {
      console.log("Time", res);
      if(res){
        this.preferredTime = res;
      }
    });
  }

  getAreasData(){
    this.dataServices.getAreaList().subscribe((res:any) => {
      console.log(res);
      if(res){
        this.areasCoveredForServices = res;
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

  // onFileSelected(event){
  //   this.selectedFile = <File>event.target.files[0];
  //   console.log("File:1", this.selectedFile);
  //   console.log("File:2", this.selectedFile.name);
  // }

  finalConfirmBeforeSubmit(){

    this.selectedServices = this.formOneFormGroup.value.servicesList;
    this.selectedUnit = this.formOneFormGroup.value.unitList;
    this.selectedPreferredTime = this.formTwoFormGroup.value.preferredTime;
    this.selectedNationality = this.formThreeFormGroup.value.nty;
    this.selectedMaterials = this.formThreeFormGroup.value.mtrl;

    for(let i=0; i<this.provideServices.length; i++){
      for(let j=0; j<this.selectedServices.length; j++){
        if(this.provideServices[i].cid == this.selectedServices[j]){
          this.selectedServicesByName.push(this.provideServices[i].category);
        }
      }
    }

    for(let i=0; i<this.unitList.length; i++){
      for(let j=0; j<this.selectedUnit.length; j++){
        if(this.unitList[i].unid == this.selectedUnit[j]){
          this.selectedUnitByName.push(this.unitList[i].serviceUnit);
        }
      }
    }

    for(let i=0; i<this.preferredTime.length; i++){
      for(let j=0; j<this.selectedPreferredTime.length; j++){
        if(this.preferredTime[i].tfeID == this.selectedPreferredTime[j]){
          this.selectedPreferredTimeByName.push(this.preferredTime[i].timeForExecution);
        }
      }
    }

    for(let i=0; i<this.nationalityList.length; i++){
      for(let j=0; j<this.selectedNationality.length; j++){
        if(this.nationalityList[i].nationalityId == this.selectedNationality[j]){
          this.selectedNationalityByName.push(this.nationalityList[i].nationalityName);
        }
      }
    }

    for(let i=0; i<this.materialList.length; i++){
      for(let j=0; j<this.selectedMaterials.length; j++){
        if(this.materialList[i].materialId == this.selectedMaterials[j]){
          this.selectedMaterialsByName.push(this.materialList[i].materialName);
        }
      }
    }

    this.selectedArea = this.formOneFormGroup.value.selectArea;
    this.selectedLocation = this.formOneFormGroup.value.selectLocation;
    this.selectedServices = this.selectedServicesByName;
    this.selectedUnit = this.selectedUnitByName;
    this.selectedNoOfWorkers = this.formOneFormGroup.value.noOfWorkers;
    this.selectedNationality = this.selectedNationalityByName;
    this.selectedGender = this.formThreeFormGroup.value.gnd;
    this.selectedMaterials = this.selectedMaterialsByName;
    this.selectedNoOfDays = this.formThreeFormGroup.value.noOfDaysReq;
    this.selectedPreferredTime = this.selectedPreferredTimeByName;
    this.selectedRequestDescription = this.formTwoFormGroup.value.description;
  }

  orderCreation(){

    this.formOneData = this.formOneFormGroup.value;
    this.formTwoData = this.formTwoFormGroup.value;
    this.formThreeData = this.formThreeFormGroup.value;

    let arrServiceList = this.formOneData.servicesList;
    let strServiceList = arrServiceList.join();

    let arrUnitList = this.formOneData.unitList;
    let strUnitList = arrUnitList.join();

    let arrPrefferedTime = this.formTwoData.preferredTime;
    let strPrefferedTime = arrPrefferedTime.join();

    let arrNationality = this.formThreeData.nty;
    let strNationality = arrNationality.join();

    let arrMaterial = this.formThreeData.mtrl;
    let strMaterial = arrMaterial.join();

    let oData = {
      // location: this.formOneData.selectLocation,
      unid: strUnitList,
      cid: strServiceList,
      subid: "0",
      no_of_workers: this.formOneData.noOfWorkers,
      nationality: strNationality,
      worker_gender: this.formThreeData.gnd,
      materials: strMaterial,
      days_required: this.formThreeFormGroup.value.noOfDaysReq,
      tfeID: strPrefferedTime,
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
