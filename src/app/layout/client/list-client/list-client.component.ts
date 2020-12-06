import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients: any

  constructor(private clientService: ClientService) { }

  async ngOnInit() {
    await this.clientService.GetListClient().subscribe(data=>{
      this.clients = data
    }, error=>{
      alert(error.error.name)
    })
  }

  async delete(id){
    if(confirm("Bạn có chắc chắn muốn xóa không")){
      await this.clientService.deleteUser(id).subscribe(res=>{
        this.ngOnInit()
      }, error=>{
        alert(error.error.name)
      })
    }
  }

}
