import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {
  allTickets:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUserTicket().subscribe((data)=>{
      this.allTickets=data;
    })
  }
  cancelTicket(ticket:any){
    this.userService.cancelTicket(ticket.id).subscribe((data)=>{
      alert(data.message);
      alert("Amount refunded Successfully")
      this.userService.getAllUserTicket().subscribe((data)=>{
        this.allTickets=data;
      })
    })
   
  }

}
