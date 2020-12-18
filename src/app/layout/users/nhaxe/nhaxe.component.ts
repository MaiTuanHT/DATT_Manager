import { Component, OnInit } from '@angular/core';
import { DecodeJwtService } from 'src/app/helpers/decode-jwt.service';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-nhaxe',
  templateUrl: './nhaxe.component.html',
  styleUrls: ['./nhaxe.component.css']
})
export class NhaxeComponent implements OnInit {

  user: any

  staff: any

  constructor(private decodeJwtService: DecodeJwtService,
    private staffService: StaffService) { }

    async ngOnInit() {
      this.user = await this.decodeJwtService.getDecodedAccessToken()
  
      console.log("user : ", this.user)
  
      if( this.user && this.user.email != "admin@gmail.com"){
        await this.staffService.getStaff(this.user.userID).subscribe(data=>{
          this.staff = data
          console.log("staff : " , this.staff)
        })
      }
    }

}
