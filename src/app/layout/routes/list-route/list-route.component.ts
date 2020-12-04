import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {ListRouteService} from './list-route.service'

@Component({
  selector: 'app-list-route',
  templateUrl: './list-route.component.html',
  styleUrls: ['./list-route.component.css']
})
export class ListRouteComponent implements OnInit {
  list_route : any
  constructor(private listRouteService : ListRouteService , private router: Router) { }

  async ngOnInit() {
    await this.listRouteService.GetListRoute().subscribe(data=>{
      this.list_route = data
      console.log(this.list_route)
    } , error =>{
      alert(error.error.message)
      if(error.error.message == undefined){
        this.router.navigateByUrl('')
      }
    })
  }

}