import { Component, OnInit,Input  } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../Core/Moudels/users';
import { AuthService } from '../../Core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

}
