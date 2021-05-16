import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


@Injectable({
  providedIn: 'root'
})
export class HeaderComponent implements OnInit {
  public searchText:string ="";
  
    isLoggedInUser: string = "";
  public collapse: boolean = false;
    public cart_num:number;

  @Output() searchEvent = new EventEmitter<string>();
   
  search()
  {
     
      this.searchEvent.emit(this.searchText);
  }
  searchMen()
  {
    this.searchText="Men";
      this.searchEvent.emit(this.searchText);
  }
  searchWomen()
  {
    this.searchText="Women";
      this.searchEvent.emit(this.searchText);
  }
  searchKids()
  {
    this.searchText="Kids";
      this.searchEvent.emit(this.searchText);
  }
  searchAll()
  {
    this.searchText="All";
      this.searchEvent.emit(this.searchText);
  }
    constructor(
        private cartService: CartService,
        public router: Router,
        private productService:ProductService,
        public translate: TranslateService,
        private authService:UserAuthService) {

          translate.addLangs(['en', 'de']);
          translate.setDefaultLang('en');
      
          const browserLang = translate.getBrowserLang();
          translate.use(browserLang.match(/en|de/) ? browserLang : 'en');

          this.isLoggedInUser = localStorage.getItem('isLoggedIn');
        }
  


    ngOnInit() {
        this.cartService.cartListSubject
            .subscribe(res => {
                this.cart_num = res.length;
            })

     
     
    }
    toggleCartPopup = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.cartService.toggleCart()
    }
    logoutUser() {
        this.authService.logout();
      }

    loginUser(){
      this.authService.login();
    }
      
     

}
