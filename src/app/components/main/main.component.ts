import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../Core/Moudels/users';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public router: Router) { }
  userLocalStorge: Users
  @Input() username: string;
  @Input() userId: number;

  logOut() {
    localStorage.removeItem('LocalUserStore')
    this.username = "";
    this.userId = null;

  }



  ngOnInit(): void {
    this.userLocalStorge = JSON.parse(localStorage.getItem('LocalUserStore'));
    if (this.userLocalStorge !== null) { this.username = this.userLocalStorge.userName }
    else { this.username = "" }
    if (this.userLocalStorge !== null) { this.userId = this.userLocalStorge.id }
    this.router.navigate(['home']);


  }

}
