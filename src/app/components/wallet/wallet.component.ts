import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  seats:any=0;
  bus:any;
  ticketAmount:any;
  walletBalance:number=5000
  check:any=false
  constructor(private router:Router,private userService:UserService,private shared:SharedService) { }

  ngOnInit(): void {
    this.userService.getWalletBalance().subscribe((data)=>{
      this.walletBalance=data;
    })
    this.shared.share.subscribe(x=>this.bus=x)
    this.shared.shares.subscribe(s=>this.seats=s)
    this.ticketAmount=this.bus.price*this.seats
    console.log(this.bus)
    if(this.bus!=0){
      this.check=true;
    }
  }

  onPay(){
    if(this.ticketAmount>this.walletBalance){
      alert("Insufficient Balance. Add money to wallet")
    }else{
      console.log("Wallet"+this.bus.bus_id)
      console.log("Wallet"+this.bus.price)
      // console.log(this.ticketAmount)
      // console.log(this.seats)
      this.userService.confirmTicket(this.bus.bus_id,this.seats).subscribe((data)=>{
        if(data!=null){
          alert("Ticket Generated Successfully")
          this.shared.getTicket(data)
          this.router.navigateByUrl('/ticket')
          // this.check=false;
        }else{
          alert("Technical issue");
        }
      })
    }
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  addMoney(money:NgForm){
    console.log(money.value.amount)
    if(money.value.amount>0){
      this.userService.addAmount(money.value.amount).subscribe((data)=>{
        console.log(data)
        this.walletBalance=data.walletBalance
      })
      this.closePopup();
    }else{
      alert("Enter valid Amount")
    }
    // this.walletBalance=this.walletBalance+money.value.amount
    
    
  }

}
