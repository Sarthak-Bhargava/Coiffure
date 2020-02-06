import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CityService {
    url = 'http://localhost:4000/City'
    constructor(private http: HttpClient) { }

    getAllCity(){
        return this.http.get(this.url)
    }
    addCity( City_Area: string,City_Name: string ){
        const body ={

          'City_Area': City_Area,
          'City_Name':City_Name

        }
        return this.http.post(this.url,body)

    }
    DeleteCity(CityID:number){
        return this.http.delete(this.url+ '/'+CityID)

    }


}
