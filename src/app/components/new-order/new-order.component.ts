import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { Orderitem } from '../../Core/Moudels/orderitem';
import { Users } from '../../Core/Moudels/users';
import { Product } from '../../Core/Moudels/product';
import { OrderApiService } from '../../Core/services/api.order.service';
import { Order } from '../../Core/Moudels/order';
import { OrderItemsApiService } from '../../Core/services/api.order-items.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Subscription } from 'rxjs';





@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  constructor(private storage: StorageMap,private orderApi: OrderApiService, private orderItemApi: OrderItemsApiService, private formBuilder: FormBuilder, private router: Router) { }
  addForm;
  newOrderId; number;
  dataOrderItems: Orderitem[] = [];
  userLocalStorge: Users
  Username: string;
  UserId: number;
  userId: number;
  dataLocalStorge: Product[] = [];
  dataSubscription: Subscription;



  onSubmit() {
    
    let sumPrice: number = 0;
    sumPrice = 0
    if (this.addForm.invalid) {
      return;
    }
     

    this.dataSubscription = this.storage.watch('cartItems').subscribe((result: Product[]) => {
      this.dataLocalStorge=result;
    });

    // dataLocalStorge = JSON.parse(localStorage.getItem('LocalOrderStore'));
    this.userLocalStorge = JSON.parse(localStorage.getItem('LocalUserStore'));
    if (this.userLocalStorge !== null) { this.userId = this.userLocalStorge.id }
    else {
      alert("יש להתחבר תחילה");
      return;
    }

    if (this.addForm.controls.shiping.value == "") { this.addForm.controls.shiping.value = false }

    for (let index = 0; index < this.dataLocalStorge.length; index++) {
      sumPrice += this.dataLocalStorge[index].price * this.dataLocalStorge[index].quntity;
    }


    const order: Order = {
      userName: '',
      phone: '',
      email: '',
      address: '',
      shiping: this.addForm.controls.shiping.value,
      price: sumPrice,
      blessing: this.addForm.controls.blessing.value,
      status: false,
      comment: this.addForm.controls.comment.value,
      userId: this.userId,
    };



    this.orderApi.addOrder(order).subscribe(data => {
      console.log(data.orderID);
      this.newOrderId = data.orderID;
     
    }, err => { }, () => {
      for (let index = 0; index < this.dataLocalStorge.length; index++) {
        this.dataOrderItems.push({
          orderID: this.newOrderId,
          productId: this.dataLocalStorge[index].prductID,
          productName: this.dataLocalStorge[index].productName,
          price: this.dataLocalStorge[index].price,
          quantity: this.dataLocalStorge[index].quntity
        })
        this.orderItemApi.addOrderitem(this.dataOrderItems[index]).subscribe((data) => { console.log(data) })
      }

    })


    this.storage.clear().subscribe(() => { });
    // localStorage.removeItem('LocalOrderStore')

    alert("הזמנה חדשה נוצרה")
    this.router.navigate(['home']);


  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      shiping: ['',],
      blessing: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

}

