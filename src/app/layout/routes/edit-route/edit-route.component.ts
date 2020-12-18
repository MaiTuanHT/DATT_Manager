import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import {RouteService} from '../route.service'

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.css']
})
export class EditRouteComponent implements OnInit {

  editRouteForm = new FormGroup({
    startLocation : new FormControl(''),
    stopLocation : new FormControl(''),
  });

  constructor(private routeService : RouteService , private router: Router , private activeRoute: ActivatedRoute ) { }

id: any

route : any

  async ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    await this.routeService.getRoute(this.id).subscribe(data=>{
      this.route = data
    },error=>{
      alert(error.error.name)
    })

  }

 async onSubmit(){

    await this.routeService.UpdateRoute(this.editRouteForm.value.startLocation , 
      this.editRouteForm.value.stopLocation , 
      this.id).subscribe(res=>{
      alert("Update Thành Công")
      this.router.navigateByUrl('//list-route');
    } , error=>{
         alert(error.error.message)
    })
  }

}
