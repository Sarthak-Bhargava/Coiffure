import { CityService } from './../City.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as toastr from 'toastr';
@Component({
    selector: 'app-City-list',
    templateUrl: './City.List.component.html',
    styleUrls:['./City.List.component.css']
})

export class CityListComponent implements OnInit {
   Cities = []
    constructor(private CityService: CityService)
     {
        this.CityService
       .getAllCity()
        .subscribe(response=>{
         if(response['status']== 'success'){
         this.Cities = response['data']
       }else{
          console.log('error')
      }
   })

}
ngOnInit() { }

loadCities(){
    this.CityService
    .getAllCity()
    .subscribe(response=>{
        if(response['status'] == 'success')
        {
            this.Cities = response['data']
        }
    })
}

onDelete(CityID:number){
    console.log(CityID)
    this.CityService
    .DeleteCity(CityID).subscribe(response=>{
        if(response['status']== 'success'){
            this.loadCities()
                }else{
            console.log('error')
        }
    })

}

}

