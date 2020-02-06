import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Product-list',
  templateUrl: './Product.List.component.html',
  styleUrls: ['./Product.List.component.css']
})
export class ProductListComponent implements OnInit {

  Products: any[] = []

  constructor(
    private router: Router,
    private ProductService: ProductService) {
      alert('hello')
      this.loadAllProducts()

  }

  loadAllProducts() {
    this.ProductService
      .getAllProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
         // this.Products = response['data']
          console.log(response['data'])
          this.Products = response['data']
        } else {
          console.log(response['error'])
        }
      });
  }

  ngOnInit() {
  }

  onAddProduct() {
    this.router.navigate(['/Product-add'])
  }

  onDelete(product_id: number) {
    this.ProductService
      .deleteProduct(product_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadAllProducts()
        } else {
          console.log(response['error'])
        }
      })
  }

}
