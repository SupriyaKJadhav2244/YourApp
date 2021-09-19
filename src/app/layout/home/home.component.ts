import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` 
  <div class="responsive">
    <img src="./../../assets/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg" style="display: block;margin-left: auto;margin-right: auto;width:100%;height:auto;">
  </div>  
  `,
  styles: [`
    .responsive {
    width: 100%;
    height: auto;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
