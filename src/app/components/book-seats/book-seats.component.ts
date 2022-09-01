import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bus } from 'src/app/service/Bus';
import { BusService } from 'src/app/service/bus/bus.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-book-seats',
  templateUrl: './book-seats.component.html',
  styleUrls: ['./book-seats.component.css']
})
export class BookSeatsComponent implements OnInit {
  bus:any;
  price:any;
   Seats:number=0;
  constructor(private busService:BusService ,private router:Router,private shared:SharedService) { }
  
  ngOnInit(): void {
    this.shared.share.subscribe(x=>this.bus=x)
  }

  bookTicket(bookTicketForm: NgForm) {
    if(bookTicketForm.value.numOfSeats<=0){
      alert("Please input valid number of seats")
    }else if(this.bus.seats<this.Seats){
      alert("Seat limit exceeded")
    }
    else{
      console.log("Book-seats"+this.bus.bus_id);
      this.shared.updateSeats(bookTicketForm.value.numOfSeats)
      this.router.navigate(['/wallet'])
    }
  }

  
}
