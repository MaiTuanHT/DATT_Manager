import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditRouteService } from './edit-route.service';

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.css']
})
export class EditRouteComponent implements OnInit {

  editRouteForm = new FormGroup({
    startLocation : new FormControl(''),
    stopLocation : new FormControl(''),
  });

  constructor(private editRouteService : EditRouteService , private router: Router , private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {
  }

 async onSubmit(){

    const id = this.activeRoute.snapshot.paramMap.get('id');
    await this.editRouteService.UpdateRoute(this.editRouteForm.value.startLocation , 
      this.editRouteForm.value.stopLocation , 
      id).subscribe(res=>{
      alert("Update Thành Công")
      this.router.navigateByUrl('//list-route');
    } , error=>{
         alert(error.error.message)
    })
  }

}
