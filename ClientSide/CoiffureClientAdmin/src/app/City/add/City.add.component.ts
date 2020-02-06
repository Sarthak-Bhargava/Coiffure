import { CityService } from './../City.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
// import * as toastr from 'toastr';
// import * as toastr from 'toastr';

@Component({
    selector: 'app-City-add',
    templateUrl: './City.add.component.html',
    styleUrls: ['./City.add.component.css']
})

export class CityAddComponent implements OnInit {
    Cities = []

     // CityID = 0
    City_Area = ''
    City_Name = ''
    constructor(private router: Router,
                private CityService:  CityService) { }

    ngOnInit() { }
    onAdd() {

        console.log(this.City_Area,this.City_Name)
        this.CityService
          .addCity(this.City_Area,this.City_Name)
          .subscribe(response => {
            if (response['status'] == 'success') {
              // toastr.success('added city successfully')
              this.router.navigate(['/City-List'])
            } else {
              alert('error')
            }
          })

    }

    onCancel() {
      this.router.navigate(['/City-List'])
    }

  }
