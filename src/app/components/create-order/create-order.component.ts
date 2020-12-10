import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.provideServices = [
      {servicesId:1, servicesName: "Options"},
      {servicesId:2, servicesName: "Options"},
      {servicesId:3, servicesName: "Options"},
      {servicesId:4, servicesName: "Options"},
      {servicesId:5, servicesName: "Options"},
      {servicesId:6, servicesName: "Options"},
      {servicesId:7, servicesName: "Options"},
      {servicesId:8, servicesName: "Options"},
      {servicesId:9, servicesName: "Options"},
      {servicesId:10, servicesName: "Options"}
    ];

    this.unitList = [
      {unitId:1, unitName:"Options"},
      {unitId:2, unitName:"Options"},
      {unitId:3, unitName:"Options"},
      {unitId:4, unitName:"Options"},
      {unitId:5, unitName:"Options"},
      {unitId:6, unitName:"Options"},
      {unitId:7, unitName:"Options"},
      {unitId:8, unitName:"Options"},
      {unitId:9, unitName:"Options"}
    ];

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
    ]

  }

  backToForm1(){
    this.showForm1 = true;
    this.showForm2 = false;
    this.showForm3 = false;
    this.showForm4 = false;
  }

  moveToForm2(){
    this.showForm1 = false;
    this.showForm2 = true;
    this.showForm3 = false;
    this.showForm4 = false;
  }

  backToForm2(){
    this.showForm1 = false;
    this.showForm2 = true;
    this.showForm3 = false;
    this.showForm4 = false;
  }

  moveToForm3(){
    this.showForm1 = false;
    this.showForm2 = false;
    this.showForm3 = true;
    this.showForm4 = false;
  }

  backToForm3(){
    this.showForm1 = false;
    this.showForm2 = false;
    this.showForm3 = true;
    this.showForm4 = false;
  }

  moveToForm4(){
    this.showForm1 = false;
    this.showForm2 = false;
    this.showForm3 = false;
    this.showForm4 = true;
  }

}
