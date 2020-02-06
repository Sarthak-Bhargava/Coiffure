import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicesService {

  constructor(
    private http: HttpClient
  ) { }
}
