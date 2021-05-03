import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  public cartList:Cart[];
  public totalCartItems: number;
  model: any = {};
  constructor(protected router: Router,private viewContainer : ViewContainerRef
    ,private cfr:ComponentFactoryResolver,private cartService:CartService) { }

  ngOnInit(): void {
  }

 /* async orderPlaced(){
    this.viewContainer.clear();
    alert('hello inside order plaed');
    const {OrderSuccessComponent} = await import("../order-success/order-success.component");
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(CheckoutPageComponent)
    )
    //this.router.navigateByUrl('/checkOut');
  } */

 orderPlaced(){
    alert('Order placed Successfully ! ');
    this.router.navigateByUrl('/home');
  //this.cartService.reloadCart(this.cartList);
  this.getItemsFromCart();
 // alert('total cart items -'+this.totalCartItems);
  let length = this.totalCartItems;
  for(let i=0;i<length;i++) {
   
    this.cartService.removeCart(i);
  }
  
  }

  getItemsFromCart = () => {
    this.cartService.cartListSubject
        .subscribe(res => {
            this.cartList = res;
            let totalItems = 0;
            for(let cart of this.cartList) {
              totalItems += 1;
            }
            this.totalCartItems = totalItems;
        })
};
  
}
