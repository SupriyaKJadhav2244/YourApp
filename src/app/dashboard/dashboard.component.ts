import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bookData:any; 
  mobileData:any;
  laptopData:any;

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.getBookData().subscribe((BookData:any)=>{ 
      // console.log(BookData.bookData);
      this.bookData=BookData.bookData;
      // console.log(this.bookData); 
    });

    this.sharedService.getMobData().subscribe((mobData:any)=>{ 
      // console.log(mobData.mobData);
      this.mobileData=mobData.mobData;
      // console.log(this.mobileData); 
    });

    this.sharedService.getlaptopData().subscribe((LaptopData:any)=>{ 
      // console.log(LaptopData.lapData);
      this.laptopData=LaptopData.lapData;
      // console.log(this.laptopData); 
    });
  }

}
