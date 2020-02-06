import { categoryService } from './../Category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as toastr from 'toastr';
@Component({
    selector: 'app-Category-list',
    templateUrl: './Category.List.component.html',
    styleUrls:['./Category.List.component.css']
})

export class CategoryListComponent implements OnInit {
   categories = []
    constructor(private categoryService: categoryService)
     {
        this.categoryService
       .getAllCategory()
        .subscribe(response=>{
         if(response['status']== 'success'){
         this.categories = response['data']
       }else{
          console.log('error')
      }
   })

}
ngOnInit() { }

loadCategories(){
    this.categoryService
    .getAllCategory()
    .subscribe(response=>{
        if(response['status'] == 'success')
        {
            this.categories = response['data']
        }
    })
}

onDelete(cg_id:number){
    console.log(cg_id)
    this.categoryService
    .DeleteCategory(cg_id).subscribe(response=>{
        if(response['status']== 'success'){
            this.loadCategories()
                }else{
            console.log('error')
        }
    })

}

}

