import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
// import { MOBDATA } from '../data/mobiledata';
import { MobileModel } from '../model/mobile.model';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  mobiles:MobileModel[] = []; 
  // mobiles:any;
  totProds:any; 

  ngOnInit(): void {
    // this.mobiles =  MOBDATA;
    
      this.sharedService.getMobData().subscribe((data:any)=>{ 
      // console.log(data);
      // console.log(data.mobData);
      this.mobiles=data.mobData;
      this.totProds = this.sharedService.calc(this.mobiles);
    })

    
  }

  removeMobQuentity(mobile:any){ 
    // console.log(mobile.quentity);
    if(mobile.quentity>0){
      mobile.quentity--;
    }  
  }

  addMobQuentity(mobile:any){ 
    // console.log(mobile.quentity);
    if(mobile.quentity<mobile.inStock){
      mobile.quentity++;
    }
  } 

}
