import { Component, OnInit } from '@angular/core';

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
      {servicesId:10, servicesName: "Options"},
      {servicesId:11, servicesName: "Options"},
      {servicesId:12, servicesName: "Options"},
      {servicesId:13, servicesName: "Options"},
      {servicesId:14, servicesName: "Options"},
      {servicesId:15, servicesName: "Options"},
      {servicesId:16, servicesName: "Options"},
      {servicesId:17, servicesName: "Options"},
      {servicesId:18, servicesName: "Options"},
      {servicesId:19, servicesName: "Options"},
      {servicesId:20, servicesName: "Options"},
      {servicesId:21, servicesName: "Options"},
      {servicesId:22, servicesName: "Options"},
      {servicesId:23, servicesName: "Options"},
      {servicesId:24, servicesName: "Options"},
      {servicesId:25, servicesName: "Options"},
      {servicesId:26, servicesName: "Options"}
    ];

    this.areasCoveredForServices = [
      {areaId:1, areaName:"Options"},
      {areaId:2, areaName:"Options"},
      {areaId:3, areaName:"Options"},
      {areaId:4, areaName:"Options"},
      {areaId:5, areaName:"Options"},
      {areaId:6, areaName:"Options"},
      {areaId:7, areaName:"Options"},
      {areaId:8, areaName:"Options"},
      {areaId:9, areaName:"Options"},
      {areaId:10, areaName:"Options"},
      {areaId:11, areaName:"Options"},
      {areaId:12, areaName:"Options"},
      {areaId:13, areaName:"Options"},
      {areaId:14, areaName:"Options"},
    ];
  }

  moveToProfInformation(){
    this.showPersForm2 = false;
    this.showProvForm2 = true;
  }

  backToPersInformation(){
    this.showProvForm2 = false;
    this.showPersForm2 = true;
  }

}
