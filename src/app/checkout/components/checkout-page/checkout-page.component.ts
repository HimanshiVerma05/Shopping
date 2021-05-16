import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  public cartList: Cart[];
  public totalCartItems: number;
  model: any = {};
  constructor(protected router: Router, private viewContainer: ViewContainerRef
    , private cfr: ComponentFactoryResolver, private cartService: CartService,
    public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? translate.currentLang : 'en');
  }

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

  orderPlaced() {

    //validate before submission
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
    }
    else {
      alert('Order placed Successfully ! ');
      this.getItemsFromCart();
      let leftCartItems = this.totalCartItems;
      for (let i = leftCartItems - 1; i >= 0; i--) {
        this.cartService.removeCart(i);
      }
      this.router.navigateByUrl('/home');
    }

  }

  getItemsFromCart = () => {
    this.cartService.cartListSubject
      .subscribe(res => {
        this.cartList = res;
        let totalItems = 0;
        for (let cart of this.cartList) {
          totalItems += 1;
        }
        this.totalCartItems = totalItems;
      })
  };

}
