import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  id : any
  schedule: any

  creatForm = new FormGroup({
    fullName : new FormControl(''),
    phoneNumber : new FormControl(''),
    seat : new FormControl('')
  });


  constructor(private activeRoute: ActivatedRoute , private ticketService : TicketService , private router: Router) { }

  async ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    await this.ticketService.GetSchedule(this.id).subscribe(data=>{
      this.schedule = data
    }, error=>{
      alert(error.error.message)
    })
  }

  async onSubmit(){
    if(this.id){
      if(!this.creatForm.value.fullName || this.creatForm.value.fullName == '' ||
      !this.creatForm.value.phoneNumber || this.creatForm.value.phoneNumber == '' ||
      !this.creatForm.value.seat || this.creatForm.value.seat == ''){
        alert("Xin vui lòng điền đầy đủ thông tin")
      }
      else if(this.creatForm.value.seat > (this.schedule.busID.seat - this.schedule.booked)){
         const sgt = "Số ghế không đủ . Xin vui lòng chọn số ghế trong khoảng 1 -> " + (this.schedule.busID.seat - this.schedule.booked)
        alert(sgt)
      }
      else{
        await this.ticketService.Ticket(this.id, this.creatForm.value.fullName,
          this.creatForm.value.phoneNumber, this.creatForm.value.seat).subscribe(res=>{
            alert("Thêm thanh công")
            this.router.navigateByUrl(`//list-ticket/${this.id}`)
          } , error =>{
            alert(error.error.message)
          })
      }
    }
  }

}
