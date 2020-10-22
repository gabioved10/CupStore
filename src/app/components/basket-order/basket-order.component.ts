import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Subscription } from 'rxjs';
import { Product } from '../../Core/Moudels/product';


@Component({
  selector: 'app-basket-order',
  templateUrl: './basket-order.component.html',
  styleUrls: ['./basket-order.component.css']
})
export class BasketOrderComponent implements OnInit {
  Products: Product[] = [];
  dataSubscription: Subscription;
  // data: CartItemFull[];
  data: Product[]
  constructor(private router: Router, private storage: StorageMap) { }

  loadProduct() {
    // var data = localStorage.getItem('LocalOrderStore');
    // this.Products = JSON.parse(data)

    this.dataSubscription = this.storage.watch('cartItems').subscribe((result: Product[]) => {
      if (result) {
        this.data = result;
        this.Products = [];
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          this.Products.push(element);
        }
      };
    })
  }

  DeleteOrderLocal(Prod: Product) {
    this.Products = this.Products.filter(ele => ele.prductID != Prod.prductID);
    // localStorage.removeItem('LocalOrderStore')
    // localStorage.setItem('LocalOrderStore', JSON.stringify(this.Products));


    this.data = this.data.filter(ele => ele.prductID != Prod.prductID);
    this.storage.set('cartItems', this.data).subscribe(() => { });

    this.Products = [];
    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index];
      this.Products.push(element);
    }

  }

  DeleteAllOrderLocal() {
    // localStorage.removeItem('LocalOrderStore')
    // this.Products = [];

    this.storage.clear().subscribe(() => { });
    this.Products = []
  }

  increaseQuntity(Prod: Product) {
    Prod.quntity = Prod.quntity + 1
    this.storage.set('cartItems', this.data).subscribe(() => { });
    // localStorage.removeItem('LocalOrderStore')
    // localStorage.setItem('LocalOrderStore', JSON.stringify(this.Products));

  }

  reducQuntity(Prod: Product) {
    Prod.quntity = Prod.quntity - 1
    if (Prod.quntity < 0) { Prod.quntity = 0 }
    this.storage.set('cartItems', this.data).subscribe(() => { });
    // localStorage.removeItem('LocalOrderStore')
    // localStorage.setItem('LocalOrderStore', JSON.stringify(this.Products));

  }

  saveOrder() {
    this.router.navigate(['newOrder']);
  }

  ngOnInit(): void {

    this.loadProduct()
  }

  ngOnChanges() {
    this.loadProduct()
  }
  ngOnDestroy() {
    this.loadProduct()
  }


}

