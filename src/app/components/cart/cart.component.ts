import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartproduct:any
  public grandtotal!:number;
  constructor(private cartservice : CartService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.cartproduct = res;
      this.grandtotal = this.cartservice.gettotalprice();
    })
  }
  delet(pd:any){
    this.cartservice.removecart(pd);
    this.toastr.warning('Hello user!', 'Succesfully deleted!');
  }
  removeall(){
    this.cartservice.removeallcart()
    this.toastr.warning('Hello user!', 'Succesfully deleted!');
  }

}
