import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {

  list_ticket: any
  id : any
  page: number = 1;
  constructor(private activeRoute: ActivatedRoute , private ticketService : TicketService , private router: Router) { }

  async ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    await this.ticketService.GetListTicket(this.id).subscribe(data=>{
      this.list_ticket = data;
      console.log(data)
    } , error=>{
      alert(error.error.message)
    }
    )
  }

  async delete(id){

    if(confirm("Bạn có chắc chắn muốn xóa không")){
      await this.ticketService.deleteTicket(id).subscribe(res=>{
        this.ngOnInit()
      }, error=>{
        alert(error.error.name)
      })
    }
  }

  async approval(id){
    if(confirm("Bạn có chắc chắn muốn duyệt vé này không")){
      await this.ticketService.update(id).subscribe(res=>{
        this.ngOnInit()
      }, error=>{
        alert(error.error.name)
      })
    }
  }
}
