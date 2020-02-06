import { Router } from '@angular/router';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Admin-LOGIN',
  templateUrl: './Admin.LOGIN.component.html',
  styleUrls:['./Admin.LOGIN.component.css']
})

export class AdminComponent implements OnInit {
   email_id = ''
  APassword = ''

  constructor(private AdminService: AdminService,
    private Router: Router) { }

  ngOnInit() { }

  onlogin() {
    if (this.email_id.length == 0) {
      alert('enter valid email id')
    } else if (this.APassword.length == 0) {
      alert('enter valid password')
    } else {
      this.AdminService
        .login(this.email_id, this.APassword)
        .subscribe(response => {
          if (response['status'] == 'success') {
            sessionStorage['User-LOGIN_status']=='1'
            sessionStorage['AID']= response['data']['AID']
            console.log
            alert('Login Succesfuly')
            this.Router.navigate(['/City-List'])
          } else {
            alert(response['error'])
          }
        })
    }
  }

}

