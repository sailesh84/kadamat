import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  showActiveTab: boolean = true;
  showCompletedTab: boolean = false;
  orderList:any = [];
  constructor(private dataServices: DataServiceService) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  showActiveOrders(){
    this.showActiveTab = true;
    this.showCompletedTab = false;
  }

  showCompletedOrders(){
    this.showActiveTab = false;
    this.showCompletedTab = true;
  }

  getOrderDetails(){
    this.dataServices.getOrderList().subscribe((res:any) => {
      console.log(res);
      if(res){
        this.orderList = res;
      }
    });
  }

}
