import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../Core/Moudels/users';
import { AuthService } from '../../Core/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }
  userLocalStorge: Users
  @Input() username: string;
  @Input() userId: number;
  @Output() txtToPrFromHeader = new EventEmitter();

  logOut() {
    localStorage.removeItem('LocalUserStore')
    this.username = "";
    this.userId = null;

  }

  eventFromHeader(event) {
    console.log(event)
    debugger;
  }

  loglogin() {

    this.auth.googleLogin().then(res => {
      this.router.navigate(['home']);
      this.moveToParentFromHeader(true);

    })
  }

  moveToParentFromHeader(txt) {
    this.txtToPrFromHeader.emit(txt);
    // debugger;
  }

  GooglelogOut() {

    this.auth.googleLogoout()
    this.moveToParentFromHeader(false);


  }


  ngOnInit(): void {
    this.userLocalStorge = JSON.parse(localStorage.getItem('LocalUserStore'));
    if (this.userLocalStorge !== null) { this.username = this.userLocalStorge.userName }
    else { this.username = "" }
    if (this.userLocalStorge !== null) { this.userId = this.userLocalStorge.id }


  }

  ngOnChanges() {
    this.userLocalStorge = JSON.parse(localStorage.getItem('LocalUserStore'));
    if (this.userLocalStorge !== null) { this.username = this.userLocalStorge.userName }
    else { this.username = "" }
    if (this.userLocalStorge !== null) { this.userId = this.userLocalStorge.id }
  }

}
