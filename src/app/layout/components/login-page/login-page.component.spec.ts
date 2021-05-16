import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpLoaderFactory } from 'src/app/app.module';
		import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
		import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page.component';
import { FormsModule } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user-auth.service';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[RouterTestingModule,
        HttpClientModule,
        FormsModule,
        TranslateModule.forRoot({
          loader: {
            provide : TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps : [HttpClient]
          }
        })],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 //custom unit test case.
  it('should call the authenticate method on login', 
  inject([UserAuthService], ((userService: UserAuthService) => {
    spyOn(userService, 'authenticate');
    
    let component = fixture.componentInstance;
    component.login();
    expect(userService.authenticate).toHaveBeenCalled();
    }))
);

 

  

});
