import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService :AuthService, 
    private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(){
    if(!this.loginForm.value.email|| this.loginForm.value.email == undefined||
      !this.loginForm.value.password|| this.loginForm.value.password == undefined){
        alert("Không được để trong email và pasword")
      }
    else{
      this.authService.login(this.loginForm.value).subscribe(
        res => {
          this.tokenStorage.saveToken(res.accessToken);
          console.log(res.accessToken);
          // this.tokenStorage.saveToken(res.token);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          alert("Login thanh cong")
          this.router.navigateByUrl('//list-staff');
        },
        error => {
          this.errorMessage = error.error.message;
          alert(this.errorMessage)
          this.isLoginFailed = true;
          // location.reload();
        }
      )
     }
    }
}
