import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Users } from '../../Core/Moudels/users';
import { UsersApiService } from '../../Core/services/api.users.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private UsersApi: UsersApiService, private router: Router, private formBuilder: FormBuilder) { }

  addForm;
  users: Users[] = [];
  userLocalStorge: Users
  arrNewUser: Users[] = [];
  newUser: Users
  Username: string;
  UserId: number;
  @Output() eventToHeader = new EventEmitter();

  loadUser() {
    this.UsersApi.getAll().subscribe(data => this.users = data);
  }

  logBack() {
    this.router.navigate(['']);
  }



  onSubmit() {


    this.arrNewUser = this.users.filter(ele => ele.userEmail == this.addForm.controls.userEmail.value && ele.password == this.addForm.controls.password.value)
   
    if (this.arrNewUser[0] == null) {
      alert("משתמש לא נמצא");
      return;
    }
    this.newUser = this.arrNewUser[0];
    localStorage.removeItem('LocalOrderStore')
    localStorage.removeItem('LocalUserStore')
    localStorage.setItem('LocalUserStore', JSON.stringify(this.newUser));
    this.Username = this.newUser.userName;
    this.UserId = this.newUser.id;
    this.eventToHeader.emit();

    this.router.navigate(['home']);
    window.location.reload();


  } 

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      userEmail: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.UsersApi.getAll().subscribe(data => this.users = data);
  }

}
