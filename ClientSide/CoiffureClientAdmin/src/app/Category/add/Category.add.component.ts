import { categoryService } from './../Category.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as toastr from 'toastr';

@Component({
    selector: 'app-category-add',
    templateUrl: './Category.add.component.html',
    styleUrls: ['./Category.add.component.css']
})

export class CategoryAddComponent implements OnInit {
    Categories = []
    cg_id = 0
    cg_name = ''
    constructor(private router: Router,
                private categoryService:  categoryService) { }

    ngOnInit() { }
    onAdd(){
        console.log(this.cg_id,this.cg_name)
        this.categoryService
        .addCategory(this.cg_id,this.cg_name)
        .subscribe(response=>{
            if(response['status'] == 'success'){
             alert('added category successfully')
             this.router.navigate(['/Category-List'])
            }else{
                console.log(response['error'])
            }
        })
    }
}
