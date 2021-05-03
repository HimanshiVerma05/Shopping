import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public products:Array<Product>;
  private sub;
  
  public filteredProducts :Array<Product>;
  constructor(private productService:ProductService,private cartService:CartService,public translate: TranslateService) {

    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');

   }
   
 

  onSearch(searchText:string){
    console.log('searchText----'+searchText);
    if(this.products !=null && searchText !=="" && searchText !=null ){
      
      this.filteredProducts= this.products.filter(x => x.title === searchText|| x.description === searchText
            || x.brand === searchText);
           // console.log(this.filteredProducts);
          this.products=this.filteredProducts;
          //console.log(this.products);
    }
  } 

  ngOnInit() {
    this.load();
}
load = () => {
   this.sub = this.productService.getProducts()
        .subscribe(res => {
            this.products = res;
        })
};

addToCart = (product) => {
  this.cartService.addToCart({product,quantity:1})
};
ngOnDestroy() {
  this.sub.unsubscribe();
}
}
