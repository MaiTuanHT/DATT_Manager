import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ListRouteService } from '../../routes/list-route/list-route.service';
import { AddBusService } from './add-bus.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  list_route : any

  addBusForm = new FormGroup({
    routeID : new FormControl(''),
    departureTime : new FormControl(''),
    seat : new FormControl(''),
  });

  constructor(private listRouteService : ListRouteService , 
    private addBusService : AddBusService,
    private router: Router) { }

  async ngOnInit() {
    await this.listRouteService.GetListRoute().subscribe(data=>{
      this.list_route = data
      console.log(this.list_route)
    } , error =>{
      alert(error.error.message)
    })
  }

  async onSubmit(){
    console.log("add bus : " ,this.addBusForm.value)
    if(
      this.addBusForm.value.routeID === "" ||
      !this.addBusForm.value.routeID ||
      this.addBusForm.value.departureTime === "" ||
      !this.addBusForm.value.departureTime ||
      !this.addBusForm.value.seat
    ){
      alert("Xin vui lòng điền đầy đủ thông tin")
    }
    else{
        await this.addBusService.Bus(this.addBusForm.value.routeID , this.addBusForm.value.departureTime, this.addBusForm.value.seat).subscribe(res=>{
          alert("Thêm Chuyến Thành Công")
          this.router.navigateByUrl('//list-bus')
        } , error=>{
          alert(error.error.message)
        })
    }
  }

}
