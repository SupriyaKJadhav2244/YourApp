import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.pattern('supriya@gmail.com')]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  login(loginForm:any){
    // console.log(loginForm.value.email,loginForm.value.password);
    if(loginForm.value.email=="supriya@gmail.com" && loginForm.value.password=="123578"){
      localStorage.setItem('User','auth');
      this.router.navigate(['/dashboard']);
    }else{
      alert("Please Enter Valid Data...");
      this.router.navigate(['/login']);
    }
  }

}
