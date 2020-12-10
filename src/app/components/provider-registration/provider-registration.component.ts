import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

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

  constructor(private dataServices: DataServiceService) { }

  ngOnInit(): void {
    this.getServicesData();
    this.getAreasData();
  }

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
      console.log(res);
      if(res){
        this.provideServices = res;
      }
    });
  }

  getAreasData(){
    this.dataServices.getAreaList().subscribe((res:any) => {
      console.log(res);
      if(res && res.status == 200){
        this.areasCoveredForServices = res.data;
      }
    });
  }

}
