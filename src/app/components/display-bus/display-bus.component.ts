import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AdminService } from 'src/app/service/admin.service';
import {Bus} from './../../service/Bus';

@Component({
  selector: 'app-display-bus',
  templateUrl: './display-bus.component.html',
  styleUrls: ['./display-bus.component.css']
})
export class DisplayBusComponent implements OnInit {
  allbuslist:Bus[]=[];
  empty:any;
  private emptyBus: Bus = {
    departureDate: '',
    destination: '',
    time:'',
    distance: 0,
    duration: '',
    price: 0,
    seats: 0,
    source:  '',
    type:  ''

};
private newBus: Bus = Object.assign({}, this.emptyBus);
  constructor(private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
    this.getBuses();
  }
  getBuses(){
    this.adminService.showAllBus().subscribe((allbuslist:Bus[])=>{
      console.log(allbuslist)
      if(allbuslist.length===0){
          this.empty=false
      }
      this.allbuslist=allbuslist
      
    })
  }

  updateBus(bus: Bus) {
    console.log(bus)
      this.adminService.updateBus(bus).subscribe((data)=>{
        alert("Bus updated Successfully")
      })
  }

deleteBus(bus:Bus) {
    this.adminService.deleteBus(bus).subscribe((data)=>{
      this.getBuses();
      alert('Bus Deleted Successfully');
    })
}

}
