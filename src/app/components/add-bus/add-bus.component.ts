import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { DatepickerOptions } from 'ng2-datepicker';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  options: DatepickerOptions = {
    format: 'DD-MM-YYYY',
  };
  constructor(private adminService:AdminService,private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  
  addBus(createBus: NgForm) {
    console.log(createBus.value)
    this.adminService.addBus(createBus.value).subscribe((res)=>{
      if(res!=null){
        alert('Bus Added Successfully');
        createBus.reset();
        this.router.navigateByUrl('/displayBus');
        
      }else{
        alert('Failed To AddBus');
        createBus.reset();
      }
    })
  }

}
