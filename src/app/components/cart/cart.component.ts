import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartproduct:any
  public grandtotal!:number;
  constructor(private cartservice : CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.cartproduct = res;
      this.grandtotal = this.cartservice.gettotalprice();
    })
  }
  delet(pd:any){
    this.cartservice.removecart(pd)
  }
  removeall(){
    this.cartservice.removeallcart()

  }

}
