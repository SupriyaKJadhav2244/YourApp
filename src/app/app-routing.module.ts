import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './products/books/books.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { HomeComponent } from './layout/home/home.component';
import { TempFormComponent } from './forms/temp-form/temp-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { BooksperticulardataComponent } from './specificdatacalls/booksperticulardata/booksperticulardata.component';
import { LaptopperticulardataComponent } from './specificdatacalls/laptopperticulardata/laptopperticulardata.component';
import { MobperticulardataComponent } from './specificdatacalls/mobperticulardata/mobperticulardata.component';

const routes:Routes = [
  // {path:'',component:HomeComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},   
  {path:'book',component:BooksComponent},  
  {path:'laptop',component:LaptopComponent},
  {path:'mobile',component:MobileComponent},
  {path:'templateForm',component:TempFormComponent},  
  {path:'reactiveForm',component:ReactiveFormComponent},
  {path:'bookSpecificData/:productName',component:BooksperticulardataComponent},
  {path:'mobSpecificData/:productName',component:MobperticulardataComponent},
  {path:'laptopSpecificData/:productName',component:LaptopperticulardataComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'lazyModule',loadChildren:()=>import('src/app/modules/lazy/lazy.module').then((m)=>m.LazyModule)},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({ 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
