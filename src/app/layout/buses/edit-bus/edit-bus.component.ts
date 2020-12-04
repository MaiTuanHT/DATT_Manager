import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListRouteService } from '../../routes/list-route/list-route.service';
import { EditBusService } from './edit-bus.service';

@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.css']
})
export class EditBusComponent implements OnInit {

  list_route : any
  id: any
  editBusForm = new FormGroup({
    routeID : new FormControl(''),
    departureTime : new FormControl(''),
    seat : new FormControl(''),
  });

  constructor(private listRouteService : ListRouteService , 
    private editBusService : EditBusService,
    private router: Router,
    private activeRoute: ActivatedRoute ) { }

  async ngOnInit() {
    await this.listRouteService.GetListRoute().subscribe(data=>{
      this.list_route = data
      console.log(this.list_route)
    } , error =>{
      alert(error.error.message)
    })

    this.id = this.activeRoute.snapshot.paramMap.get('id');
  }

  onSubmit(){
    this.editBusService.BusUpdate(this.editBusForm.value.routeID , 
      this.editBusForm.value.departureTime,
      this.editBusForm.value.seat,
      this.id).subscribe(data=>{
        alert("Update thanh cong")
        this.router.navigateByUrl("//list-bus")
      }),
      error=>{
        alert(error.error.name)
      }
  }
}
