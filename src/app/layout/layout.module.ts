import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
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
import { SinginComponent } from './singin/singin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListAgencyComponent } from './agency/list-agency/list-agency.component';
import { DetailAgencyComponent } from './agency/detail-agency/detail-agency.component';
import { ListTicketComponent } from './ticket/list-ticket/list-ticket.component';
import { AddTicketComponent } from './ticket/add-ticket/add-ticket.component';



@NgModule({
  declarations: [LayoutComponent, 
    ListStaffComponent, AddStaffComponent, 
    ListScheduleComponent, AddScheduleComponent, EditScheduleComponent, 
    EditRouteComponent, AddRouteComponent, ListRouteComponent, 
    AddBusComponent, ListBusComponent, EditBusComponent, SinginComponent,
    ListAgencyComponent, DetailAgencyComponent, ListTicketComponent, AddTicketComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LayoutModule { }
