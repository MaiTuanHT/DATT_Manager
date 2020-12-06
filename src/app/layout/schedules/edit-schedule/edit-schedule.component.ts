import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListBusService } from '../../buses/list-bus/list-bus.service';
import { VehicleService } from '../../vehicle/vehicle.service';
import { EditScheduleService } from './edit-schedule.service';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  list_bus : any
  vehicles : any
  editScheduleForm = new FormGroup({
    busID : new FormControl(''),
    date : new FormControl(''),
    price: new FormControl(''),
    vehicleID: new FormControl('')
  });

  constructor(private editScheduleService : EditScheduleService ,
    private listBusService: ListBusService,
    private router: Router,
    private activeRoute: ActivatedRoute,
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
    const id = this.activeRoute.snapshot.paramMap.get('id');
    await this.editScheduleService.updateSchedule(this.editScheduleForm.value.busID , 
      this.editScheduleForm.value.date, 
      this.editScheduleForm.value.price,
      this.editScheduleForm.value.vehicleID,
      id).subscribe(res=>{
      alert("Update Thành Công")
      this.router.navigateByUrl('//list-schedule');
    } , error=>{
         alert(error.error.name)
    })
  }

}
