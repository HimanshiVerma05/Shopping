import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpLoaderFactory } from 'src/app/app.module';
		import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
		import { HttpClient } from '@angular/common/http';
import { FooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide : TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps : [HttpClient]
          }
        })],
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
