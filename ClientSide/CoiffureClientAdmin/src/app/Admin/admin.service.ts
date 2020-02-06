import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminService {
  url = 'http://localhost:4000/Admin'

  constructor(private http: HttpClient) { }

  login(email_id: string, APassword: string) {
    const body = {
      email_id: email_id,
      APassword: APassword
    }

    return this.http.post(this.url + '/LOGIN', body)
  }


}
