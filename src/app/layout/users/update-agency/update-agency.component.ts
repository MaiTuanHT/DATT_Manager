import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateAgencyService } from './update-agency.service';

@Component({
  selector: 'app-update-agency',
  templateUrl: './update-agency.component.html',
  styleUrls: ['./update-agency.component.css']
})
export class UpdateAgencyComponent implements OnInit {

  updateAgencyForm = new FormGroup({
    nameAgency : new FormControl(''),
    phoneNumber : new FormControl(''),
    discription : new FormControl(''),
    policy : new FormControl(''),
    utilities : new FormControl('')
  });

  constructor(private router: Router, private updateAgencyService: UpdateAgencyService) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    await  this.updateAgencyService.AgencyUpdate(
      this.updateAgencyForm.value.nameAgency , 
      this.updateAgencyForm.value.phoneNumber,
      this.updateAgencyForm.value.discription,
      this.updateAgencyForm.value.policy,
      this.updateAgencyForm.value.utilities,
      ).subscribe(data=>{
          alert("Update thanh cong")
          this.router.navigateByUrl("//list-staff")
        }),
        error=>{
          alert(error.error.name)
        }
    }

}
