import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ListScheduleService} from './list-schedule.service'

@Component({
  selector: 'app-list-schedule',
  templateUrl: './list-schedule.component.html',
  styleUrls: ['./list-schedule.component.css']
})
export class ListScheduleComponent implements OnInit {

  list_schedule: any

  constructor(private listScheduleService : ListScheduleService , private router: Router) { }

  async ngOnInit() {
    await this.listScheduleService.GetListSchedule().subscribe(data=>{
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

    if(confirm("Bạn có chắc chắn muốn xóa không")){
      await this.listScheduleService.deleteSchedule(id).subscribe(res=>{
        this.ngOnInit()
      }, error=>{
        alert(error.error.name)
      })
    }
    }

}
