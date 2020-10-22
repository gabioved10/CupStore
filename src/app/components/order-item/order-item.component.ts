import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Orderitem } from '../../Core/Moudels/orderitem';
import { OrderItemsApiService } from '../../Core/services/api.order-items.service';



@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  constructor(private router: Router, private OrderitemApi: OrderItemsApiService) { }
  orderItem: Orderitem[] = [];


  @Output() dataToParent = new EventEmitter();
  @Input() orderNum: number;

  closeDetail() {
    this.dataToParent.emit(false);

  }

  loadOrderItems(numOrder) {

    this.OrderitemApi.getAll().subscribe(data => this.orderItem = data, err => { }, () => {

      console.log(this.orderItem)
      this.orderItem = this.orderItem.filter((ele => ele.orderID == numOrder))
      console.log(this.orderItem)
    })

  }
  logBack() {
    this.router.navigate(['']);
  }


  ngOnInit(): void {
    this.loadOrderItems(this.orderNum)
  }

}
