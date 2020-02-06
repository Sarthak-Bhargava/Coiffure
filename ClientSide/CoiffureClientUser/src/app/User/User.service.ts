import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  url = 'http://localhost:4000/user/'

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    return this.http.post(this.url + '/LOGIN', body)
  }

registerUser( username: string, firstname: string, lastname: string, fullname: string, email: string, password: string ) {
  const body = {
    username: username,
    firstname: firstname,
    lastname: lastname,
    fullname: fullname,
    email: email,
    password: password
  }


  return this.http.post(this.url + '/register', body)
}

}
