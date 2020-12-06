import { Route } from '@angular/compiler/src/core';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ListBusService } from '../../buses/list-bus/list-bus.service';
import { VehicleService } from '../../vehicle/vehicle.service';
import { AddScheduleService } from './add-schedule.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  list_bus : any
  vehicles : any

  addScheduleForm = new FormGroup({
    busID : new FormControl(''),
    date : new FormControl(''),
    price: new FormControl(''),
    vehicleID: new FormControl('')
  });

  constructor(private addScheduleService : AddScheduleService ,
     private listBusService: ListBusService,
     private router: Router ,
     private vehicleService: VehicleService) { }

  async ngOnInit() {
    await this.listBusService.GetListBus().subscribe(res=>{
      this.list_bus = res
    } , error=>{
      alert(error.error.message)
    })

    await this.vehicleService.GetListVehicle().subscribe(data=>{
      this.vehicles = data
    }, error=>{
      alert(error.error.name)
    })

  }

  async onSubmit(){
    if(
      this.addScheduleForm.value.busID === "" ||
      !this.addScheduleForm.value.busID ||
      this.addScheduleForm.value.date === "" ||
      !this.addScheduleForm.value.date||
      !this.addScheduleForm.value.price
    ){
      alert("Xin vui lòng điền đầy đủ thông tin")
    }
    else{
        await this.addScheduleService.Schedule(this.addScheduleForm.value.busID ,
           this.addScheduleForm.value.date, 
           this.addScheduleForm.value.price,
           this.addScheduleForm.value.vehicleID).subscribe(res=>{
          alert("Thêm Lịch Trình Thành Công")
          this.router.navigateByUrl('//list-schedule');
        } , error=>{
          alert(error.error.name)
        })
    }
  }

}
