import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../Core/Moudels/category';
import { Product } from '../../Core/Moudels/product';
import { CategoryApiService } from '../../Core/services/api.category.service';
import { ProductApiService } from '../../Core/services/api.product.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Subscription } from 'rxjs';





@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {



  constructor(private storage: StorageMap, private ProductApi: ProductApiService, private router: Router, private CategoryApi: CategoryApiService) { }
  Products: Product[] = [];
  Categorys: Category[];
  loc: {}
  @Output() eventFromProduct = new EventEmitter();
  dataSubscription: Subscription;
  dataLocalStorge: Product[] = [];






  sortProduct(typeSort) {
    this.Products.sort(this.dynamicSort(typeSort));
  }

  dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }


  saveOrderLocal(Prod: Product) {

    let Arr: Product[] = [];


    var dataCartItems;

    Prod.quntity = 1;

    this.dataSubscription = this.storage.watch('cartItems').subscribe((result: Product[]) => {
      this.dataLocalStorge = result;
    });



    if (this.dataLocalStorge == null) {

      Arr.push(Prod);
      this.storage.set('cartItems', Arr).subscribe(() => { });
      this.eventFromProduct.emit(0);

    }

    else if (this.dataLocalStorge != null) {
      for (var i = 0; i < this.dataLocalStorge.length; i++) {
        Arr.push(this.dataLocalStorge[i])
      }
      const result = this.dataLocalStorge.filter(ele => ele.prductID == Prod.prductID)
      if (result.length == 0) {
        Arr.push(Prod);
        this.eventFromProduct.emit(0);
        this.storage.clear().subscribe(() => { });
        this.storage.set('cartItems', Arr).subscribe(() => { });
      }
      else {
        console.log(this.dataLocalStorge.filter(ele => ele.prductID = Prod.prductID))
        alert("מוצר כבר קיים בהזמנה")
        console.log(Prod)
      }
    }



  }



  loadProduct() {
    this.CategoryApi.getAll().subscribe(data => {
      this.Categorys = data;
      this.ProductApi.getAll().subscribe(data => {
        this.Products = data;
      });
    });
  }



  getCategory(Cat) {
    let cat: any = this.Categorys.filter(ele => ele.categoryID == Cat)
    return cat[0].categoryName;
  }

  ngOnInit(): void {
    this.loadProduct()



  }

}


