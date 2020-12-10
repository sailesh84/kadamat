import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../../service/data-service.service';
 

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
	//navBar = true;
	public apiResponse = {};
	public apiResponsefinal = [];
	public data= {};
	
	// public data2 = {};
	public imgURL="/../assets/img/";
	

  constructor( private dataService: DataServiceService, private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
	   this.dataService.getServiceListData().subscribe((response)=>{
		this.apiResponse = response;
  		//console.log("response from GET API is " +this.apiResponse.data);				
		//this.apiResponsefinal = this.apiResponse.data;
		//console.log("mythreadData rootservice"+this.apiResponsefinal);		
  }) 
/* this.dataService.getServiceListData().subscribe((data) => {
         this.apiResponse = Array.from(Object.keys(data), k=>data[k]);
         console.log("view json data:"+this.apiResponse);
		// console.log("view json data [2]:"+this.apiResponse[1]);
      });*/
 }  

}
