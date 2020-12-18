import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {
  list_staff : any ;

  constructor(private staffService: StaffService ,
    private httpClient : HttpClient , private router: Router) { }

  async  ngOnInit() {
    await this.staffService.GetListStaff().subscribe(data=>{
        this.list_staff = data ;
        console.log(data)
    } , error=>{
      alert(error.error.name)
        this.router.navigateByUrl('')
    }
    )
  }

async delete(id){

  if(confirm("Bạn có chắc chắn muốn xóa không")){
    await this.staffService.deleteStaff(id).subscribe(res=>{
      this.ngOnInit()
    }, error=>{
      alert(error.error.name)
    })
  }
  }

}
