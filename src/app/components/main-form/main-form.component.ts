import { Component, OnInit, Input } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { CartItemFull } from '../../Core/Moudels/cart-item';
import { Subscription } from 'rxjs';
import { Product } from '../../Core/Moudels/product';




@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  constructor(private storage: StorageMap) { }
  showBasket: boolean = false;
  @Input() txtFrmPrnt: boolean;
  frmChild: string;
  cartItems: CartItemFull[] = [];
  dataSubscription: Subscription;
  temp: string;
  dataLocalStorge:Product[] = [];


  DataFromChild(txt) {
    this.frmChild = txt;
    this.txtFrmPrnt = txt
  }


  GooglInFromChild(txt) {
    this.txtFrmPrnt = txt;
  }

  eventFromProduct(event) {
    this.temp = event;
    console.log(event)
    debugger;
  }



  ngOnInit(): void {

    this.dataSubscription = this.storage.watch('cartItems').subscribe((result: Product[]) =>  {
      if (result ) {
        this.showBasket = true;
      }
      else { this.showBasket = false };
    });
   
  

    // var data = localStorage.getItem('LocalOrderStore');
    // if (data) {
    //   this.showBasket = true;
    // }
    // else { this.showBasket = false };


  }


}





