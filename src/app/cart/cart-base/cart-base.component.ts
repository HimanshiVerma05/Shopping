import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-base',
  templateUrl: './cart-base.component.html',
  styleUrls: ['./cart-base.component.scss']
})
export class CartBaseComponent  {

  public cartList:Cart[];
  public totalPrice: number;
  constructor(protected cartService: CartService,protected router: Router) {
      this.loadCart();
  }

  
  loadCart = () => {
      this.cartService.cartListSubject
          .subscribe(res => {
              this.cartList = res;
              let total = 0;
              for(let cart of this.cartList) {
                  total += cart.product.price * cart.quantity;
              }
              this.totalPrice = total;
          })
  };
  removeFromCart = index => {
    
      this.cartService.removeCart(index);
  };

  checkOut(){
    this.router.navigateByUrl('/checkOut');
  }
 
}
