import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersApiService } from '../../Core/services/api.users.service';
import { Users } from '../../Core/Moudels/users';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private UsersApi: UsersApiService, private router: Router) { }

  users: Users[];

  loadUser() {
    this.UsersApi.getAll().subscribe(data => this.users = data);
  }

  logBack() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.loadUser()
    // this.UsersApi.getAll().subscribe(data => console.log(data));


  }

}
