import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import {RouteService} from '../route.service'

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {

  addRouteForm = new FormGroup({
    startLocation : new FormControl(''),
    stopLocation : new FormControl(''),
  });

  constructor(private routeService : RouteService , private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    if(this.addRouteForm.value.startLocation == "" || this.addRouteForm.value.startLocation == undefined ||this.addRouteForm.value.startLocation == null || !this.addRouteForm.value.startLocation ||
    this.addRouteForm.value.stopLocation == "" || this.addRouteForm.value.stopLocation == undefined ||this.addRouteForm.value.stopLocation == null || !this.addRouteForm.value.stopLocation){
      alert("Xin vui lòng điền đầy đủ thông tin")
    }
    else{
        await this.routeService.Route(this.addRouteForm.value.startLocation , this.addRouteForm.value.stopLocation).subscribe(res=>{
          alert("Thêm Tuyến Thành Công")
          this.router.navigateByUrl('//list-route');
        } , error=>{
          alert(error.error.name)
        })
    }
  }

}
