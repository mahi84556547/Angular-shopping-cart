import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(public httpc:ProductsService,private cartSer :CartService) { }

  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this.httpc.getAll().subscribe((data:any) => {
      console.log(data)
      this.products = data;
    })
  }

  addtocart(pd:any){
    this.cartSer.addtocart(pd);

  }


}
