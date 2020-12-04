import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListStaffService } from './list-staff.service';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {
  list_staff : any ;

  constructor(private listStaffService: ListStaffService ,
    private httpClient : HttpClient , private router: Router) { }

  async  ngOnInit() {
    await this.listStaffService.GetListStaff().subscribe(data=>{
        this.list_staff = data ;
        console.log(data)
    } , error=>{
      alert(error.error.message)
      if(error.error.message == undefined){
        this.router.navigateByUrl('')
      }
    }
    )
    
  }

}
