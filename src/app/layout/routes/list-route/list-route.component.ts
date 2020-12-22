import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';


import {RouteService} from '../route.service'

@Component({
  selector: 'app-list-route',
  templateUrl: './list-route.component.html',
  styleUrls: ['./list-route.component.css']
})
export class ListRouteComponent implements OnInit {
  list_route : any
  constructor(private routeService : RouteService , private router: Router) { }

  async ngOnInit() {
    await this.routeService.GetListRoute().subscribe(data=>{
      this.list_route = data
      console.log(this.list_route)
    } , error =>{
      alert(error.error.message)
      if(error.error.message == undefined){
        this.router.navigateByUrl('')
      }
    })
  }

  async delete(id){
    if(confirm("Bạn có chắc chắn muốn xóa không")){
      await this.routeService.deleteRoute(id).subscribe(res=>{
        this.ngOnInit()
      }, error=>{
        alert(error.error.name)
      })
    }
    }

}
