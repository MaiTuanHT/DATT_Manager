import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private httpClient : HttpClient) { }

  public GetListTicket(id){
    return this.httpClient.get(`http://localhost:3000/tickets/schedule/${id}`);
  }

  public GetSchedule(id){
    return this.httpClient.get(`http://localhost:3000/schedules/findone/${id}`);
  }

  public deleteTicket(id){
    return this.httpClient.delete(`http://localhost:3000/tickets/${id}`);
  }

  public Ticket(scheduleID, fullName , phone, seat){
    return this.httpClient.post('http://localhost:3000/tickets/create',{
      fullName,
      phone,
      scheduleID,
      seat
    },httpOptions)
  }

  public update(id){
    return this.httpClient.put(`http://localhost:3000/tickets/${id}`,{
    },httpOptions)
  }

}
