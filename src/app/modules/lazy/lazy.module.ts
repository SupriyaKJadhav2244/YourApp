import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { LazyComponent } from 'src/app/lazy/lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([  
      {path:'',redirectTo:'lazyComponent'},
      {path:'lazyComponent',component:LazyComponent}  
    ])
  ]
})
export class LazyModule { }
