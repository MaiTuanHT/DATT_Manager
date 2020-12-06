import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  vehicles: any

  constructor(private vehicleService: VehicleService, private router: Router) { }

  async ngOnInit() {
    await this.vehicleService.GetListVehicle().subscribe(data=>{
      this.vehicles = data
    } , error=>{
      alert(error.error.name)
    })
  }

  async delete(id){

    if(confirm("Bạn có chắc chắn muốn xóa không")){
      await this.vehicleService.deleteVehicle(id).subscribe(res=>{
        this.ngOnInit()
      }, error=>{
        alert(error.error.name)
      })
    }
    }

}
