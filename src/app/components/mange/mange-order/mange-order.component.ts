import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../../Core/Moudels/order';
import { OrderApiService } from '../../../Core/services/api.order.service';



Order

@Component({
  selector: 'app-mange-order',
  templateUrl: './mange-order.component.html',
  styleUrls: ['./mange-order.component.css']
})
export class MangeOrderComponent implements OnInit {

  constructor(private OrderApi: OrderApiService, private router: Router) { }

  orders: Order[];

  loadOrder() {
    this.OrderApi.getAll().subscribe(data => this.orders = data);
  }

  logBack() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.loadOrder()
    // this.OrderApi.getAll().subscribe(data => console.log(data));
  }


}