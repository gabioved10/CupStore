import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../../Core/Moudels/users';
import { UsersApiService } from '../../../Core/services/api.users.service';



@Component({
  selector: 'app-mange-users',
  templateUrl: './mange-users.component.html',
  styleUrls: ['./mange-users.component.css']
})
export class MangeUsersComponent implements OnInit {

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
    this.UsersApi.getAll().subscribe(data => console.log(data));
  }


}
