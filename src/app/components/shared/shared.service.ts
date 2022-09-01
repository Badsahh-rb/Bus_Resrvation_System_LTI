import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bus } from 'src/app/service/Bus';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private content =new BehaviorSubject<Object>(0);
  private seats=new BehaviorSubject<Number>(0);
  private ticket =new BehaviorSubject<Object>(0);
  private wallet=new BehaviorSubject<Boolean>(true);


  public share=this.content.asObservable();
  public shares=this.seats.asObservable();
  public recentTicket=this.ticket.asObservable();
  public walletCheck=this.wallet.asObservable();
  
  constructor() { 
    
  }
  updatePrice(bus:Bus){
    this.content.next(bus)
  }
  updateSeats(seat:Number){
    this.seats.next(seat)
  }
  getTicket(ticket:any){
    this.ticket.next(ticket)
  }

  getCheck(check:any){
    this.wallet.next(check)
  }
}
