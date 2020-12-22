import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusesService } from '../../buses/buses.service';
import { VehicleService } from '../../vehicle/vehicle.service';
import {ScheduleService} from '../schedule.service'

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  list_bus : any
  vehicles : any
  schedule: any
  id: any
  editScheduleForm = new FormGroup({
    busID : new FormControl(''),
    date : new FormControl(''),
    price: new FormControl(''),
    vehicleID: new FormControl('')
  });



  constructor(private scheduleService : ScheduleService ,
    private busesService: BusesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private vehicleService: VehicleService) { }

  async ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    console.log("id ne : ", this.id)
    await this.scheduleService.getSchedule(this.id).subscribe(data=>{
      this.schedule = data
    }, error=>{
      alert(error.error.name)
    })
    await this.busesService.GetListBus().subscribe(res=>{
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


    // if(this.editScheduleForm.value.busID == " "){
    //   console.log("value busID : ", this.editScheduleForm.value.busID + "abc")
    // }

    console.log("value1 : ", this.editScheduleForm.value.busID == "")
    console.log("value2 : ", this.editScheduleForm.value.price)

    if(((this.editScheduleForm.value.busID && this.editScheduleForm.value.busID != "")||
      (this.editScheduleForm.value.price && this.editScheduleForm.value.price != this.schedule.price)||
      (this.editScheduleForm.value.date && this.editScheduleForm.value.date != this.schedule.date))  && this.schedule.booked > 0){
      alert("Lịch trình này đã có người đặt vé. Bạn không thể sửa !!")
    }
    else{
      await this.scheduleService.updateSchedule(this.editScheduleForm.value.busID , 
        this.editScheduleForm.value.date, 
        this.editScheduleForm.value.price,
        this.editScheduleForm.value.vehicleID,
        this.id).subscribe(res=>{
        alert("Update Thành Công")
        this.router.navigateByUrl('//list-schedule');
      } , error=>{
           alert(error.error.name)
      })
    }
  }

}
