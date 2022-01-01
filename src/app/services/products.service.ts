import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   public url:string = 'https://fakestoreapi.com/products'
  constructor(public http:HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }
}
