import { ProductService } from './../Product.service';
import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
// import * as toastr from '';
// import * as toastr from 'toastr';
import { categoryService } from 'src/app/Category/Category.service';

@Component({
  selector: 'app-Product-add',
  templateUrl: './Product.add.component.html',
  styleUrls: ['./Product.add.component.css']
})
export class ProductAddComponent implements OnInit {
      product_id:number=0
      p_name: string = ''
      // VID: number = 0
      details: string= ''
      brand:string = ''
      thumbnail:string = ''
      cg_id:number=0
      price:number=0





  products: any[]

  constructor(
    private router: Router,
    private categoryService: categoryService,
    private productService: ProductService
  ) {

    this.productService
      .getAllProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']

        } else {
          alert('error')
        }
      });

  }

  ngOnInit() {
  }

  onReset() {
    this.product_id = 0
    this.p_name = ''
    this.details= ''
    this.brand= ''
    this.thumbnail= ''
    this.cg_id = 0
    this.price = 0




  }
  onSelectFile(event){
    this.thumbnail = event.target.files[0]
  }

  onAdd() {
    // if (this.PName.length == 0) {
    //   toastr.error('enter valid title')
    // }
    // // } else if (this.PDiscription.length == 0) {
    // //   toastr.error('enter valid PDiscription')
    // // } else if (this.Address_Discription.length == 0) {
    // //   toastr.error('enter valid adderess')
    // // }
    // else {
      console.log(this.product_id,this.p_name,this.details,this.brand, this.thumbnail, this.cg_id, this.price)
      this.productService
        .addProduct(this.product_id,this.p_name,this.details,this.brand, this.thumbnail, this.cg_id, this.price)
        .subscribe(response => {
          if (response['status'] == 'success') {
            // toastr.success('added product successfully')
            this.router.navigate(['/Product-List'])
          } else {
            alert('error')
          }
        });

  }

  onCancel() {
    this.router.navigate(['/Product-List'])
  }

}
