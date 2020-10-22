import { Component, OnInit } from '@angular/core';
import { OrderApiService } from '../../Core/services/api.order.service';
import { Order } from '../../Core/Moudels/order';
import { Router } from '@angular/router';
import { Users } from '../../Core/Moudels/users';
import { StorageMap } from '@ngx-pwa/local-storage';
import { CartItemFull } from '../../Core/Moudels/cart-item';




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private OrderApi: OrderApiService, private router: Router) { }
  orders: Order[];
  showDetail: boolean;
  numOrder: number;
  userid; number;
  userLocalStorge: Users


  hideDetail(child) {
    this.showDetail = child;
  }

  loadOrder() {
    this.userLocalStorge = JSON.parse(localStorage.getItem('LocalUserStore'));
    if (this.userLocalStorge !== null) { this.userid = this.userLocalStorge.id }
    else { this.userid = 0 }

    this.OrderApi.getAll().subscribe(data => { this.orders = data }, err => { }, () => {
      this.orders = this.orders.filter(ele => ele.userId == this.userid && ele.userId !== null)
    })



  }

  showDetailFunction(orderDetail) {
    this.numOrder = orderDetail;
    this.showDetail = true;
  }
  logBack() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.loadOrder()

  }

  ngOnChange() {
    this.loadOrder()
  }

}

