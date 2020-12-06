import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  addVehicleForm = new FormGroup({
    licensePlate : new FormControl(''),
    numberSeat : new FormControl(''),
  });

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit(){
    if(
      this.addVehicleForm.value.licensePlate === "" ||
      !this.addVehicleForm.value.licensePlate ||
      !this.addVehicleForm.value.numberSeat
    ){
      alert("Xin vui lòng điền đầy đủ thông tin")
    }
    else{
        await this.vehicleService.Vehicle(this.addVehicleForm.value.licensePlate ,
           this.addVehicleForm.value.numberSeat).subscribe(res=>{
          alert("Thêm Xe Thành Công")
          this.router.navigateByUrl('//list-vehicle')
        } , error=>{
          alert(error.error.message)
        })
    }
  }

}
