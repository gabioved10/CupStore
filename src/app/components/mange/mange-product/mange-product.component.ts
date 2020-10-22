import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { Category } from '../../../Core/Moudels/category';
import { Product } from '../../../Core/Moudels/product';
import { CategoryApiService } from '../../../Core/services/api.category.service';
import { ProductApiService } from '../../../Core/services/api.product.service';





@Component({
  selector: 'app-mange-product',
  templateUrl: './mange-product.component.html',
  styleUrls: ['./mange-product.component.css']
})
export class MangeProductComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private ProductApi: ProductApiService, private CategoryApi: CategoryApiService, private router: Router) { }
  invalidLogin: boolean = false;
  editStutos: boolean = false;
  addForm;
  //  currentProduct = {};


  Products: Product[];
  currentProduct: Product;
  Categorys: Category[];
  idNum: number = 0;



  loadProduct() {
    this.CategoryApi.getAll().subscribe(data => {
      this.Categorys = data;

      this.ProductApi.getAll().subscribe(data => {
        this.Products = data;

      });

    });

  }

  logProductMange() {
    this.router.navigate(['menagProduct']);
  }

  gotoAdd() {
    this.editStutos = false;
    window.scrollTo(0, document.body.scrollHeight);
  }

  gotoMain() {
    this.editStutos = false;
    window.scrollTo(0, 0)
  }


  logOderMange() {
    this.router.navigate(['menageOrder']);
  }

  logUsesMange() {
    this.router.navigate(['menageUsers']);
  }

  editProduct(product) {

    this.editStutos = true;

    this.currentProduct = product;
    console.log(this.currentProduct.prductID);
    this.addForm = this.formBuilder.group({
      prductID: ['', Validators.nullValidator],
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      categoryID: ['', Validators.required],
      color: ['', Validators.required],
      weight: ['', Validators.required],
      imag: ['', Validators.required],
      price: ['', Validators.required],
      material: ['', Validators.required],
      neckfinish: ['', Validators.required],
      catNumber: ['', Validators.required],
      productDiameter: ['', Validators.required],
      productHeight: ['', Validators.required],
      neckDiameter: ['', Validators.required],
    });
    this.addForm.controls['prductID'].setValue(this.currentProduct.prductID);
    this.addForm.controls['productName'].setValue(this.currentProduct.productName);
    this.addForm.controls['productDescription'].setValue(this.currentProduct.productDescription);
    this.addForm.controls['categoryID'].setValue(this.currentProduct.categoryID);
    this.addForm.controls['color'].setValue(this.currentProduct.color);
    this.addForm.controls['weight'].setValue(this.currentProduct.weight);
    this.addForm.controls['imag'].setValue(this.currentProduct.imag);
    this.addForm.controls['price'].setValue(this.currentProduct.price);
    this.addForm.controls['material'].setValue(this.currentProduct.material);
    this.addForm.controls['catNumber'].setValue(this.currentProduct.catNumber);
    this.addForm.controls['productDiameter'].setValue(this.currentProduct.productDiameter);
    this.addForm.controls['productHeight'].setValue(this.currentProduct.productHeight);
    this.addForm.controls['neckDiameter'].setValue(this.currentProduct.neckDiameter);

    window.scrollTo(0, document.body.scrollHeight);


  }
  deleteproduct(event) {
    this.editStutos = false;
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.idNum = idAttr.nodeValue;

    this.ProductApi.deleteProduct(this.idNum).subscribe(data => {
      console.log(data)
    })
    this.Products = this.Products.filter(ele => ele.prductID != this.idNum);
  }

  onSubmit() {
    console.log(this.addForm.invalid);
    switch (this.editStutos) {
      case false: {
        if (this.addForm.invalid) { return; }
        const Product: Product = {
          productName: this.addForm.controls.productName.value,
          productDescription: this.addForm.controls.productDescription.value,
          categoryID: this.addForm.controls.categoryID.value,
          color: this.addForm.controls.color.value,
          weight: this.addForm.controls.weight.value,
          price: this.addForm.controls.price.value,
          imag: this.addForm.controls.imag.value,
          material: this.addForm.controls.material.value,
          neckfinish: this.addForm.controls.neckfinish.value,
          catNumber: this.addForm.controls.catNumber.value,
          productDiameter: this.addForm.controls.productDiameter.value,
          productHeight: this.addForm.controls.productHeight.value,
          neckDiameter: this.addForm.controls.neckDiameter.value,
        }
        this.ProductApi.addProduct(Product).subscribe((data: Product) => { console.log(data) })
        this.Products.push(Product);
        this.editStutos = false;
        this.addForm.reset();
        break;
      }
      case true: {


        const Product: Product = {
          prductID: this.addForm.controls.prductID.value,
          productName: this.addForm.controls.productName.value,
          productDescription: this.addForm.controls.productDescription.value,
          categoryID: this.addForm.controls.categoryID.value,
          color: this.addForm.controls.color.value,
          weight: this.addForm.controls.weight.value,
          price: this.addForm.controls.price.value,
          imag: this.addForm.controls.imag.value,
          material: this.addForm.controls.material.value,
          neckfinish: this.addForm.controls.neckfinish.value,
          catNumber: this.addForm.controls.catNumber.value,
          productDiameter: this.addForm.controls.productDiameter.value,
          productHeight: this.addForm.controls.productHeight.value,
          neckDiameter: this.addForm.controls.neckDiameter.value,




        }

        this.ProductApi.editProduct(Product).subscribe()
        // this.Products.push(Product);

        this.Products = this.Products.filter(ele => ele.prductID != Product.prductID);
        this.Products.push(Product);

        this.editStutos = false;

        this.addForm.reset();




      }

    }
  }


  ngOnInit(): void {
    this.editStutos = false;
    this.loadProduct()
    this.addForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      categoryID: ['', Validators.required],
      color: ['', Validators.required],
      weight: ['', Validators.required],
      imag: ['', Validators.required],
      price: ['', Validators.required],
      material: ['', Validators.required],
      neckfinish: ['', Validators.required],
      catNumber: ['', Validators.required],
      productDiameter: ['', Validators.required],
      productHeight: ['', Validators.required],
      neckDiameter: ['', Validators.required],
    });


  }





}
