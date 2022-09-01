import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = 'enjoyer';
  constructor(private router: Router,private userService:UserService) { }

  ngOnInit(): void {
  }
  user(registerUser: NgForm) {
    this.userService.register(registerUser.value).subscribe((data)=>{
      if(data.message==='Conformation Mail is sent'){
        alert('Conformation Mail is sent');
        registerUser.reset();
        this.router.navigateByUrl('login');
      }else{
        alert("Retry after some time");
        this.router.navigateByUrl('login');
      }
    })
  };

}
