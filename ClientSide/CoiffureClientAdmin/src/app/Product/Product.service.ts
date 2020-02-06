
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ProductService {
  url = 'http://localhost:4000/product/'

  constructor(private http: HttpClient) { }


  getAllProducts() {
   // alert('helllo')
    return this.http.get(this.url)
  }

  addProduct(product_id: number,p_name: string, details: string, brand: string, file: any, cg_id: number, price: number  ) {
    // const body = {
    //   VID: VID,
    //   PName: PName,
    //   PImage:PImage,
    //   PDiscription: PDiscription,
    //   Address_Discription: Address_Discription,
    //   Start_Date: Start_Date,
    //   End_Date:End_Date
    const body = new FormData()
    body.append('product_id','' +product_id)
    body.append('p_name', p_name)
    body.append('details ', details )
    body.append('brand', brand)
    body.append('thumbnail', file)
    // body.append('VID', '' + VID)
    body.append('cg_id',''+cg_id)
    body.append('price','' +price)



    // body.append('Start_Date', Start_Date)
    // body.append('End_Date',  End_Date)

    return this.http.post(this.url, body)
    }

  deleteProduct(product_id: number) {
    return this.http.delete(this.url + '/' + product_id)
  }




}
