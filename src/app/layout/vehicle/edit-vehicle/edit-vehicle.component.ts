import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  id : any
  editVehicleForm = new FormGroup({
    licensePlate : new FormControl(''),
    numberSeat : new FormControl(''),
  });

  constructor(private vehicleService: VehicleService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
  }
  
 async onSubmit(){

  console.log("vehicle id : " , this.id)

  await this.vehicleService.UpdateVehicle(this.editVehicleForm.value.licensePlate,
    this.editVehicleForm.value.numberSeat,this.id).subscribe(res=>{
      alert("Update thanh cong")
      this.router.navigateByUrl("//list-vehicle")
    }, error=>{
      alert(error.error.name)
    })
  }

}
