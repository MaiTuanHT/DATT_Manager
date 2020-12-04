import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EditBusService {

  constructor(private httpClient : HttpClient) { }

  public BusUpdate(routeID, departureTime , seat, id){
    return this.httpClient.put(`http://localhost:3000/buses/${id}`,{
      routeID,
      departureTime,
      seat
    },httpOptions)
  }

}
