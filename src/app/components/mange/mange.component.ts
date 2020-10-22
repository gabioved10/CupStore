import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Core/services/auth.service';
AuthService

@Component({
  selector: 'app-mange',
  templateUrl: './mange.component.html',
  styleUrls: ['./mange.component.css']
})



export class MangeComponent implements OnInit {
  invalidLogin: boolean = false;


  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }


  loadProduct() {


  }

  logProductMange() {
    this.router.navigate(['menagProduct']);
  }

  logOderMange() {
    this.router.navigate(['menageOrder']);
  }

  logUsesMange() {
    this.router.navigate(['menageUsers']);
  }

  deleteproduct(event) {


  }

  onSubmit() {

  }

  ngOnInit(): void {


  }

}