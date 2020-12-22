import { HttpClient } from '@angular/common/http';
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


  fileData: File = null;

  updateAgencyForm = new FormGroup({
    nameAgency : new FormControl(''),
    phoneNumber : new FormControl(''),
    discription : new FormControl(''),
    policy : new FormControl(''),
    utilities : new FormControl(''),
    ticketPaymentDealine : new FormControl('')
  });

  agency: any

  constructor(private router: Router, 
    private updateAgencyService: UpdateAgencyService,
    private httpClient : HttpClient) { }

  async ngOnInit() {
    await this.updateAgencyService.getAgency().subscribe(res=>{
      this.agency = res
    })
  }


  // fileProgress(fileInput: any) {
  //   this.fileData = <File>fileInput.target.files[0];
  // }

  async onSubmit(){

    // const formData = new FormData();

    // formData.append('file',this.fileData)

    // await this.updateAgencyService.Ticket(formData)
    // .subscribe(res => {
    //   console.log(res);
    //   alert('SUCCESS !!');
    // })


    await  this.updateAgencyService.AgencyUpdate(
      this.updateAgencyForm.value.nameAgency , 
      this.updateAgencyForm.value.phoneNumber,
      this.updateAgencyForm.value.discription,
      this.updateAgencyForm.value.policy,
      this.updateAgencyForm.value.utilities,
      this.updateAgencyForm.value.ticketPaymentDealine
      ).subscribe(data=>{
          alert("Update thanh cong")
          this.router.navigateByUrl("//list-staff")
        }, error=>{
          alert(error.error.name)
        })


    }



}
