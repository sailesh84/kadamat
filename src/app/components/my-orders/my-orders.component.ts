import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  showActiveTab: boolean = true;
  showCompletedTab: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showActiveOrders(){
    this.showActiveTab = true;
    this.showCompletedTab = false;
  }

  showCompletedOrders(){
    this.showActiveTab = false;
    this.showCompletedTab = true;
  }

}
