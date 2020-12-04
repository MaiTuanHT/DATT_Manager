import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  creatForm = new FormGroup({
    fullName : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl(''),
    password : new FormControl('')
  });

  constructor(private authService: AuthService , 
    private router : Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("create form")
    console.log(this.creatForm.value)
    if(this.creatForm.value.fullName == "" || this.creatForm.value.fullName == undefined ||this.creatForm.value.fullName == null || !this.creatForm.value.fullName ||
    this.creatForm.value.email == "" || this.creatForm.value.email == undefined ||this.creatForm.value.email == null || !this.creatForm.value.email ||
    this.creatForm.value.password == "" || this.creatForm.value.password == undefined ||this.creatForm.value.password == null || !this.creatForm.value.password ||
    this.creatForm.value.phoneNumber == "" || this.creatForm.value.phoneNumber == undefined ||this.creatForm.value.phoneNumber == null || !this.creatForm.value.phoneNumber){
      alert("Xin vui lòng điền đầy đủ thông tin")
    }
    else{
      this.authService.create(this.creatForm.value).subscribe(
        res => {
          console.log(this.creatForm.value)
          // console.log(res);
          alert("Tạo thành công");
          this.router.navigateByUrl('//list-staff');
        },
        error => {
          alert(error.error.message);
        }
      )
    }
    }
}
