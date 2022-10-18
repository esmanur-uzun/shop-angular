import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from '../product/product';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor( private http: HttpClient) { }
  path= "http://localhost:3000/products"

  getProduct(categoryId:number):Observable<Product[]>{

    let newPath = this.path
    if(categoryId){
      newPath = newPath+"?categoryId=" +categoryId
    }
    return this.http.get<Product[]>(newPath)
  }

  addProduct(product: Product):Observable<Product>{

    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'applicaiton/json',
        'Authorization':'Token'
      })
    }

    return this.http.post<Product>(this.path,product,httpOptions)

  }
}
