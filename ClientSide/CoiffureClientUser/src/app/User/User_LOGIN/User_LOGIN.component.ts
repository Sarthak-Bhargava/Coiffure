import { Router } from '@angular/router';
import { UserService } from './../User.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-User-login',
  templateUrl: './User_LOGIN.component.html',
  styleUrls: ['./User_LOGIN.component.css']
})

export class UserLoginComponent implements OnInit {
  email = ''
  password = ''

  constructor(private userService: UserService,
    private Router: Router) { }

  ngOnInit() { }

  onlogin() {
    if (this.email.length == 0) {
      alert('enter valid email')
    } else if (this.password.length == 0) {
      alert('enter valid password')
    } else {
      this.userService
        .login(this.email, this.password)
        .subscribe(response => {
          if (response['status'] == 'success') {
            sessionStorage['User-LOGIN_status']=='1'
            sessionStorage['UID']= response['data']['UID']
            console.log
            alert('Login Succesfuly')
            this.Router.navigate(['/Services'])
          } else {
            alert(response['error'])
          }
        })
    }
  }

}
