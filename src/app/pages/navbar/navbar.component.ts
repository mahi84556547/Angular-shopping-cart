import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
date:any
  badgenumber: any;
  constructor(private numberservice :CartService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.date =  Date.now()
    }, 1000);
    this.numberservice.getProducts()
    .subscribe(res =>{
      this.badgenumber = res.length;
    })
  }


}
