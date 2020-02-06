import { UserService } from './../User.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-User-register',
  templateUrl: './User.register.component.html',
  styleUrls: ['./User.register.component.css']
})

export class UserRegisterComponent implements OnInit {
  username = ''
  firstname = ''
  lastname = ''
  fullname = ''
  email = ''
  password = ''

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() { }

  onRegister() {
    if (this.username.length == 0) {
      alert('enter valid Username')
    }else if (this.firstname.length == 0) {
      alert('enter valid Firstname')
    } else if (this.lastname.length == 0) {
      alert('enter valid Lastname')
    } else if (this.fullname.length == 0) {
      alert('enter valid fullname')
    }else if (this.email.length == 0) {
      alert('enter valid email')
    } else if (this.password.length == 0) {
      alert('enter valid password')
    }
    else {
      this.userService.registerUser( this.username, this.firstname, this.lastname, this.fullname, this.email, this.password )
        .subscribe(response => {
          if (response['status'] == 'success') {
            alert('registered successfully')
            this.router.navigate(['/User-LOGIN'])
          } else {
            alert(response['error'])
          }
        })
    }
  }
}
