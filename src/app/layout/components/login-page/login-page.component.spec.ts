import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpLoaderFactory } from 'src/app/app.module';
		import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
		import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page.component';
import { FormsModule } from '@angular/forms';

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
});
