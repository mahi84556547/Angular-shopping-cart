import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItem: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }

  addtocart(product: any) {
    this.cartItem.push(product);

    this.productList.next(this.cartItem);

  }

  gettotalprice() : number {
    let grandtotal = 0;
    this.cartItem.map( (a:any) =>{
      grandtotal += a.price;
    })
    return grandtotal;
  }

  removecart(product: any) {
    this.cartItem.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItem.splice(index, 1);
      }
    });
    this.productList.next(this.cartItem);
  }
  removeallcart() {
    this.cartItem = [];
    this.productList.next(this.cartItem);
  }
}
