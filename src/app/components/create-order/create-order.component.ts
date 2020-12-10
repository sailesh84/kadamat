import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

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

  constructor(private dataServices: DataServiceService) { }

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
      if(res && res.status == 200){
        this.unitList = res.data;
      }
    });
  }



}
