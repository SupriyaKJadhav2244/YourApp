import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
  
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { BannerFirstComponent } from './layout/banner-first/banner-first.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { BannerSecondComponent } from './layout/banner-second/banner-second.component';
import { ProductsComponent } from './layout/products/products.component';
import { BannerThirdComponent } from './layout/banner-third/banner-third.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { BooksComponent } from './products/books/books.component';
import { MobileFilterPipe } from './custompipe/mobile-filter.pipe';
import { BookFilterPipe } from './custompipe/book-filter.pipe';
import { LaptopFilterPipe } from './custompipe/laptop-filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './layout/home/home.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { ChildComponent } from './layout/child/child.component';
import { TempFormComponent } from './forms/temp-form/temp-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { MobperticulardataComponent } from './specificdatacalls/mobperticulardata/mobperticulardata.component';
import { LaptopperticulardataComponent } from './specificdatacalls/laptopperticulardata/laptopperticulardata.component';
import { BooksperticulardataComponent } from './specificdatacalls/booksperticulardata/booksperticulardata.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerFirstComponent,
    ContactUsComponent,
    BannerSecondComponent,
    ProductsComponent,
    BannerThirdComponent,
    FooterComponent,  
    MobileComponent,
    LaptopComponent,
    BooksComponent,   
    MobileFilterPipe,  
    BookFilterPipe,
    LaptopFilterPipe,
    HomeComponent,
    PagenotfoundComponent,
    ChildComponent,
    TempFormComponent,
    ReactiveFormComponent,
    DashboardComponent,
    LoginComponent,
    MobperticulardataComponent,
    LaptopperticulardataComponent,
    BooksperticulardataComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
