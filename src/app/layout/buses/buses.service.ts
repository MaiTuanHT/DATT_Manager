import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BusesService {
  constructor(private httpClient : HttpClient) { }

  public getBus(id){
    return this.httpClient.get(`http://localhost:3000/buses/${id}`)
  }
  
    public BusUpdate(routeID, departureTime , seat, id){
      return this.httpClient.put(`http://localhost:3000/buses/${id}`,{
        routeID,
        departureTime,
        seat
      },httpOptions)
    }

    public Bus(routeID, departureTime , seat){
      // console.log(fullName)
      return this.httpClient.post('http://localhost:3000/buses/',{
        routeID,
        departureTime,
        seat
      },httpOptions)
    }

    public GetListBus(){
      return this.httpClient.get('http://localhost:3000/buses/agency');
    }
  
    public deleteBus(id){
      return this.httpClient.delete(`http://localhost:3000/buses/${id}`);
    }
}
