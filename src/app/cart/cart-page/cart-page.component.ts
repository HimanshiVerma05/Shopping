import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartBaseComponent } from '../cart-base/cart-base.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent  extends CartBaseComponent{

  constructor(protected cartService: CartService,protected router: Router) {
    super(cartService,router);
}



changeQuantity = (cart,quantity) => {
    cart.quantity = quantity;
    this.cartService.reloadCart(this.cartList);
}

goHome()
{
  this.router.navigateByUrl('/home');
}


}


