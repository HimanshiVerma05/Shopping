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
  private sub2;
  public allProductList : Array<Product>;
  
  public filteredProducts :Array<Product>;
  constructor(private productService:ProductService,private cartService:CartService,public translate: TranslateService) {

    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
   
   }
   
 

  onSearch(searchText:string){
    this.reload();
    searchText=searchText.toLowerCase();
    console.log('searchText----'+searchText);
    console.log('products before filtering allProductList----'+this.allProductList);
    if(this.allProductList !=null && searchText !=="" && searchText !=null ){
      
      this.filteredProducts= this.allProductList.filter(x => x.title.toLowerCase().indexOf(searchText) != -1 || x.description.toLowerCase().indexOf(searchText) != -1
            || x.brand.toLowerCase().indexOf(searchText) != -1  || x.category.toLowerCase().indexOf(searchText) != -1 );
           // console.log(this.filteredProducts);
          this.products=this.filteredProducts;
          console.log('products after filtering----'+this.allProductList);
    }
    if(searchText ==="" || searchText === "All" ) {
     
      this.products=this.allProductList;
    }
  } 

  ngOnInit() {
    this.load();
}
load = () => {
   this.sub = this.productService.getProducts()
        .subscribe(res => {
          //alert('product reset ');
            this.products = res;
        })
};
reload = () => {
  this.sub2 = this.productService.getProducts()
       .subscribe(res => {       
           this.allProductList = res;
       })
};

addToCart = (product) => {
  this.cartService.addToCart({product,quantity:1})
};
ngOnDestroy() {
  this.sub.unsubscribe();
  
}
}
