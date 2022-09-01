import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Bus } from 'src/app/service/Bus';
import { BusService } from 'src/app/service/bus/bus.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css']
})
export class BookTicketsComponent implements OnInit {
  currentDate: Date = new Date();
  avails: any=[];
  check: any = null;
  price:number=0;
  v:any;
  constructor(private busService:BusService,private router:Router,private shared:SharedService) { }

  ngOnInit(): void {
   // this.shared.setMessage(this.price)
  }

  checkAvail(checkAvailForm:NgForm) {
    // if (formatDate(checkAvailForm.value.availableDate,'yyyy-MM-dd','en_US') > formatDate(this.currentDate.getDate(),'yyyy-MM-dd','en_US')) 
    //   {
    //   console.log('---Fromdate is greater----');
    //   }
    //   else
    //   {
    //   console.log('---Todate is greater----');
    //   }
    if(formatDate(checkAvailForm.value.availableDate,'yyyy-MM-dd','en_US') < formatDate(this.currentDate,'yyyy-MM-dd','en_US')){
      alert("Past Date is not allowed");
    }else{
      this.busService.chechAvail(checkAvailForm.value).subscribe((data:any)=>{
        this.avails=data
        this.check=true
      })
    }
    
  }
//   validDate(date: string) {
//     return (formGroup: FormGroup) => {
//       const dateControl = formGroup.controls[date];
//       const journeydate=new Date(dateControl.value);
//       const currentdate = new Date()
//       currentdate.setHours(0,0,0,0);
//       if (journeydate.getTime() <  currentdate.getTime()){  
//           dateControl.setErrors({
//             oldDate:true
//           });
//     }
//   }
// }
  bookTicket(bus:any){
    console.log("Book-tickets"+bus)
    this.shared.updatePrice(bus)
    this.router.navigate(['/bookseats']);
  }
}
