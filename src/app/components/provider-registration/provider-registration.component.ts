import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-provider-registration',
  templateUrl: './provider-registration.component.html',
  styleUrls: ['./provider-registration.component.css']
})
export class ProviderRegistrationComponent implements OnInit {

  provideServices:any = [];
  areasCoveredForServices:any = [];
  showProvForm2: boolean = false;
  showPersForm2: boolean = true;
  personalInfoFormGroup: FormGroup;
  professionalInfoFormGroup: FormGroup;
  submitted: boolean = false;
  selectedServices:any = [];
  persInfoData:any = {};
  profInfoData:any = {};
  popMessage: String;

  constructor(private dataServices: DataServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getServicesData();
    this.getAreasData();

    this.personalInfoFormGroup = this.formBuilder.group({
      mobileNo: ['', [Validators.required]],
      name: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      nameArabic: [''],
      password: ['', [Validators.required]]
    });

    this.professionalInfoFormGroup = this.formBuilder.group({
      typeList: ['', [Validators.required]],
      servicesList: [''],
      areasList: [''],
    });
  }

  // convenience getter for easy access to form fields
  get persF() { return this.personalInfoFormGroup.controls; }

  moveToProfInformation(){
    this.showPersForm2 = false;
    this.showProvForm2 = true;
  }

  backToPersInformation(){
    this.showProvForm2 = false;
    this.showPersForm2 = true;
  }

  getServicesData(){
    this.dataServices.getServiceListData().subscribe((res:any) => {
      console.log("Services",res);
      if(res){
        this.provideServices = res;
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
    console.log(this.personalInfoFormGroup.value);
  }

  form2(){
    console.log(this.professionalInfoFormGroup.value);
  }

  provdRegistration(){
    this.persInfoData = this.personalInfoFormGroup.value;
    this.profInfoData = this.professionalInfoFormGroup.value

    let arrServiceList = this.profInfoData.servicesList;
    let strServiceList = arrServiceList.join();

    let arrAreaList = this.profInfoData.servicesList;
    let strAreaList = arrAreaList.join();

    let pData = {
      profile_image: "https://sim.is/wp-content/uploads/2013/11/dummy-image-landscape.jpg",
      mobile: this.persInfoData.mobileNo,
      name: this.persInfoData.name,
      name_arabic: this.persInfoData.nameArabic,
      email: this.persInfoData.emailId,
      password: this.persInfoData.password,
      type: this.profInfoData.typeList,
      company_file: "https://sim.is/wp-content/uploads/2013/11/dummy-image-landscape.jpg",
      cid: strServiceList,
      aid: strAreaList
    }
    // console.log(pData);

    this.dataServices.createProvider(pData).subscribe((res:any) =>{
      console.log('create provider response', res);
      if (res && res.status == 200) {
        this.popMessage = '<i class="fa fa-check-circle icon" aria-hidden="true"></i>' + res.message;
        setTimeout(() => {
          this.popMessage = '';
          this.personalInfoFormGroup.reset();
          this.professionalInfoFormGroup.reset();
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
