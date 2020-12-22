import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ScheduleService} from '../schedule.service'

@Component({
  selector: 'app-list-schedule',
  templateUrl: './list-schedule.component.html',
  styleUrls: ['./list-schedule.component.css']
})
export class ListScheduleComponent implements OnInit {

  list_schedule: any
  schedule: any

  constructor(private scheduleService : ScheduleService , private router: Router) { }
  async ngOnInit() {
    await this.scheduleService.GetListSchedule().subscribe(data=>{
      this.list_schedule = data
      console.log(this.list_schedule)
    } , error =>{
      alert(error.error.message)
      if(error.error.message == undefined){
        this.router.navigateByUrl('')
      }
    })
  }

  async delete(id){

    this.list_schedule.forEach(scheduleOfList => {
      if(scheduleOfList._id == id){
        this.schedule = scheduleOfList
      }
    });

    if(this.schedule && this.schedule.booked > 0){
      alert("Bạn không thể xoá lịch trình khi đã có người đặt vé!!")
    }else{
      if(confirm("Bạn có chắc chắn muốn xóa không")){
        await this.scheduleService.deleteSchedule(id).subscribe(res=>{
          this.ngOnInit()
        }, error=>{
          alert(error.error.name)
        })
      }
    }
    
    }

}
