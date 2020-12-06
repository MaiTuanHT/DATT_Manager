import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private tokenStorageService: TokenStorageService, private router: Router){

  }
  ngOnInit(): void {

  }
  title = 'Admin';

  singOut(){
    this.tokenStorageService.signOut()
    this.router.navigate(['/'])
  }

}
