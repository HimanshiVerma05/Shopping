import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private sub;
  public product:Product;
  quantity: number = 1;
  constructor(private productService:ProductService,
    private cartService:CartService,private route: ActivatedRoute) {

        if(this.cartService.toggleCartSubject.getValue()){
            this.cartService.toggleCart();
           }
     }

    ngOnInit() {
      this.route.params
          .subscribe(res => {

              this.getProduct(res.id);
          })
  }
  getProduct = (id) => {
      this.sub = this.productService.getProducts()
          .subscribe(res => {
              //Himanshi filter the result based on the product's id 
              //this.product = res[id-1];
              this.product = res.filter(x => x.id == id)[0];
          })
  };
  changeQuantity = (newQuantity:number) => {
      this.quantity = newQuantity;
  };
  addToCart = (product) => {
      if(this.quantity) this.cartService.addToCart({product,quantity:this.quantity})

      if(!this.cartService.toggleCartSubject.getValue()){
        this.cartService.toggleCart();
       }
  };
  ngOnDestroy() {
      this.sub.unsubscribe();
  }


}
