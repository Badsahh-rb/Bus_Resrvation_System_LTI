import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin:any;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    // this.userService.isAdminLoggedIn=this.isAdmin;
    // this.userService.is=this.isAdmin;
    console.log(this.userService.isUserLogin());
    console.log(this.userService.isAdminLogin());
  }
  get isAdminLogin() {
    return this.userService.isAdminLoggedIn;
  }
  get isCustomerLogin() {
    return this.userService.isUserLoggedIn;
  }

  get getavalia() {
    return true;
   }

   logout() {
    this.userService.isAdminLoggedIn= false;
    this.userService.isUserLoggedIn = false;
    this.userService.logout()
    this.router.navigateByUrl('/');
  }

}
