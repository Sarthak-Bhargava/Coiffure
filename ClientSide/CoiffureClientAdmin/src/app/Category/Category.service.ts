import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class categoryService {
    url = 'http://localhost:4000/Category'
    constructor(private http: HttpClient) { }

    getAllCategory(){
        return this.http.get(this.url)
    }
    addCategory(cg_id:number,cg_name: string){
        const body ={

            'cg_id':cg_id,
            'cg_name':cg_name
        }
        return this.http.post(this.url,body)

    }
    DeleteCategory(cg_id:number){
        return this.http.delete(this.url+ '/'+cg_id)

    }


}
