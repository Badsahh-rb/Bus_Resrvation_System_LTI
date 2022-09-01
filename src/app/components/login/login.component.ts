import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient,private userService:UserService) { }

  ngOnInit(): void {
  }
  login(loginForm: NgForm){
    this.userService.login(loginForm.value.username,loginForm.value.password).subscribe((res:any)=>{
      console.log(res);
      if(res.Error!=null){
        alert(res.Error)
        loginForm.reset()
      }else{
        this.saveUserToken(res.access_token,res.refresh_token)
        this.router.navigateByUrl('/');
      }
      
    })
    
    
  }
  saveUserToken(access_token:any,refresh_token:any) {
    localStorage.setItem('Access_token', access_token);
    localStorage.setItem('Refresh_token',refresh_token);
    this.getUserFromStorage(access_token)
  }

  getUserFromStorage(access_token:any) {
    let data:any=jwt_decode(access_token)
    if(data.role[0]==='ROLE_USER'){
      this.userService.isUserLoggedIn=true;
    }
    else if(data.role[0]==='ROLE_ADMIN'){
      this.userService.isAdminLoggedIn=true;
    }
    return data.role[0];
  }

}

