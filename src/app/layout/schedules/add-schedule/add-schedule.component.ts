import { Route } from '@angular/compiler/src/core';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ListBusService } from '../../buses/list-bus/list-bus.service';
import { AddScheduleService } from './add-schedule.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  list_bus : any

  addScheduleForm = new FormGroup({
    busID : new FormControl(''),
    date : new FormControl(''),
  });

  constructor(private addScheduleService : AddScheduleService ,
     private listBusService: ListBusService,
     private router: Router) { }

  async ngOnInit() {
    await this.listBusService.GetListBus().subscribe(res=>{
      this.list_bus = res
    } , error=>{
      alert(error.error.message)
    })
  }

  async onSubmit(){
    if(
      this.addScheduleForm.value.busID === "" ||
      !this.addScheduleForm.value.busID ||
      this.addScheduleForm.value.date === "" ||
      !this.addScheduleForm.value.date
    ){
      alert("Xin vui lòng điền đầy đủ thông tin")
    }
    else{
        await this.addScheduleService.Schedule(this.addScheduleForm.value.busID , this.addScheduleForm.value.date).subscribe(res=>{
          alert("Thêm Lịch Trình Thành Công")
          this.router.navigateByUrl('//list-schedule');
        } , error=>{
          alert(error.error.message)
        })
    }
  }

}
