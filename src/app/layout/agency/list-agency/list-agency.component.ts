import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-list-agency',
  templateUrl: './list-agency.component.html',
  styleUrls: ['./list-agency.component.css']
})
export class ListAgencyComponent implements OnInit {

  list_agency : any ;

  constructor(private agencyService: AgencyService ,
    private httpClient : HttpClient , private router: Router) { }
   async ngOnInit() {

    await this.agencyService.GetListAgency().subscribe(data=>{
      this.list_agency = data ;
      console.log(data)
  } , error=>{
    alert(error.error.message)
    if(error.error.message == undefined){
      this.router.navigateByUrl('')
    }
  }
  )

  }

  async delete(id){

    if(confirm("Bạn có chắc chắn muốn xóa không")){
      await this.agencyService.deleteAgency(id).subscribe(res=>{
        this.ngOnInit()
      }, error=>{
        alert(error.error.name)
      })
    }
  }

}
