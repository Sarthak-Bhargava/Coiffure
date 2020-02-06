import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactUsService {

  constructor(
    private HttpClient: HttpClient
  ) { }
}
