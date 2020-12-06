import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ListStaffComponent } from './users/list-staff/list-staff.component';
import { AddStaffComponent } from './users/add-staff/add-staff.component';
import { ListScheduleComponent } from './schedules/list-schedule/list-schedule.component';
import { AddScheduleComponent } from './schedules/add-schedule/add-schedule.component';
import { EditScheduleComponent } from './schedules/edit-schedule/edit-schedule.component';
import { EditRouteComponent } from './routes/edit-route/edit-route.component';
import { AddRouteComponent } from './routes/add-route/add-route.component';
import { ListRouteComponent } from './routes/list-route/list-route.component';
import { AddBusComponent } from './buses/add-bus/add-bus.component';
import { ListBusComponent } from './buses/list-bus/list-bus.component';
import { EditBusComponent } from './buses/edit-bus/edit-bus.component';
import { SinginComponent } from './singin/singin.component'
import { from } from 'rxjs';
import { ListAgencyComponent } from './agency/list-agency/list-agency.component';
import { ListTicketComponent } from './ticket/list-ticket/list-ticket.component';
import { AddTicketComponent } from './ticket/add-ticket/add-ticket.component';
import { ListVehicleComponent } from './vehicle/list-vehicle/list-vehicle.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './vehicle/edit-vehicle/edit-vehicle.component';
import { ListClientComponent } from './client/list-client/list-client.component';

const routes: Routes = [{ path: '', component: LayoutComponent ,
children:[
  { path:"list-agency", component:ListAgencyComponent},
  { path:"list-client", component:ListClientComponent},
   { path:"list-staff", component:ListStaffComponent},
   { path:"add-staff", component:AddStaffComponent},
   { path:"list-route", component:ListRouteComponent},
   { path:"add-route", component:AddRouteComponent},
   { path:"edit-route/:id", component:EditRouteComponent},
   { path:"list-bus", component:ListBusComponent},
   { path:"add-bus", component:AddBusComponent},
   { path:"edit-bus/:id", component:EditBusComponent},
   { path:"list-schedule", component:ListScheduleComponent},
   { path:"add-schedule", component:AddScheduleComponent},
   { path:"edit-schedule/:id", component:EditScheduleComponent},
   { path:"list-ticket/:id", component:ListTicketComponent},
   { path:"add-ticket/:id", component:AddTicketComponent},
   { path:"", component:SinginComponent},
   { path:"list-vehicle", component:ListVehicleComponent},
   { path:"add-vehicle", component:AddVehicleComponent},
   { path:"edit-vehicle/:id", component:EditVehicleComponent},
    
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
