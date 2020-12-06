import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListBusService } from './list-bus.service';

@Component({
  selector: 'app-list-bus',
  templateUrl: './list-bus.component.html',
  styleUrls: ['./list-bus.component.css']
})
export class ListBusComponent implements OnInit {

  list_bus: any

  constructor(private listBusService : ListBusService , private router: Router) { }

  async ngOnInit() {
    await this.listBusService.GetListBus().subscribe(data=>{
      this.list_bus = data
      console.log(this.list_bus)
    } , error =>{
      alert(error.error.message)
      if(error.error.message == undefined){
        this.router.navigateByUrl('')
      }
    })
  }

  async delete(id){

    if(confirm("Bạn có chắc chắn muốn xóa không")){
      await this.listBusService.deleteBus(id).subscribe(res=>{
        this.ngOnInit()
      }, error=>{
        alert(error.error.name)
      })
    }
    }

}
