import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/model/User';

import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserDataService } from 'src/app/services/user-data.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  isShown = false;
  public users: Array<User>;
  private sub;
  constructor(private router: Router, private userAuthService: UserAuthService,
    private route: ActivatedRoute, private userdataService: UserDataService

  ) { }

  ngOnInit() {
    
  }


  login() {
    this.loading = true;

    let isUserValid = this.userAuthService.authenticate(this.model.username, this.model.password);
    if (isUserValid) {

      localStorage.setItem('isLoggedIn', 'Yes');
      this.router.navigateByUrl('/home');
      this.isShown = false;

    }

    else {

      this.loading = false;
      this.isShown = true;
      console.log("Invalid user cred");
      this.router.navigateByUrl('/login');
    }

  }
  authenticate(username: string, password: string) {

    //console.log('user data '+this.users);
    const user = this.users.find(x => x.username === username && x.password === password);
    if (!user) {
      return false;

    }
    else {
      return true;
    }
  }
}



