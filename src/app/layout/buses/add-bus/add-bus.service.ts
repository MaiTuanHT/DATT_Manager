import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AddBusService {

  constructor(private httpClient : HttpClient) { }

  public Bus(routeID, departureTime , seat){
    // console.log(fullName)
    return this.httpClient.post('http://localhost:3000/buses/',{
      routeID,
      departureTime,
      seat
    },httpOptions)
  }

}
