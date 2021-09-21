import { Component, OnInit} from '@angular/core';   

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit { 

img1= "./../../assets/7e1ee12956a4e0a1d3b05f00ff080c9f.jpg";
img2= "./../../assets/848309.jpg";
img3= "./../../assets/wp2634222.jpg";  

ngOnInit() {  
}  

findPlace(val:any){  
  console.log(val.value);
  }  
}
