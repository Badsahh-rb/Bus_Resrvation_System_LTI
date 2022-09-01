import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  ticket:any;
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.shared.recentTicket.subscribe(x=>this.ticket=x)
  }

}
