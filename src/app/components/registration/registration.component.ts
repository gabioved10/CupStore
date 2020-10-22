import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsersApiService } from '../../Core/services/api.users.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Users } from '../../Core/Moudels/users';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private UsersApi: UsersApiService, private router: Router, private formBuilder: FormBuilder) { }
  addForm;
  users: Users[] = [];
  newUser: Users;
  Username: string;
  UserId: number;
  @Output() eventToPr = new EventEmitter();

  logBack() {
    this.router.navigate(['']);
  }



  onSubmit() {

    const user: Users = {
      id: 0,
      userName: this.addForm.controls.userName.value,
      userEmail: this.addForm.controls.userEmail.value,
      address: this.addForm.controls.address.value,
      phone: this.addForm.controls.phone.value,
      password: this.addForm.controls.password.value,

    };

    this.UsersApi.addUsers(user).subscribe(data => {
      console.log(data)
      this.newUser = data;
    }, err => { }, () => {
      delete this.newUser.address;
      delete this.newUser.phone;
      localStorage.removeItem('LocalUserStore')
      localStorage.setItem('LocalUserStore', JSON.stringify(this.newUser));
      this.Username = this.newUser.userName;
      this.UserId = this.newUser.id;
      this.moveToParent();
      this.router.navigate(['']);
    })


  }

  moveToParent() {
    this.eventToPr.emit();
  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({

      userName: ['', Validators.required],
      userEmail: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],

    });
    this.UsersApi.getAll().subscribe(data => this.users = data);
  }

}
