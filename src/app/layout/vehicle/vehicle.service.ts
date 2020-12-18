import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient : HttpClient) { }


  public GetListVehicle(){
    return this.httpClient.get('http://localhost:3000/vehicles/');
  }

  public GetVehicle(id){
    return this.httpClient.get(`http://localhost:3000/vehicles/${id}`);
  }

  public Vehicle(licensePlate, numberSeat){
    return this.httpClient.post('http://localhost:3000/vehicles/',{
      licensePlate,
      numberSeat,
    },httpOptions)
  }

  public UpdateVehicle(licensePlate, numberSeat , id){
    console.log("id : " , id)
    return this.httpClient.put(`http://localhost:3000/vehicles/${id}`,{
      licensePlate,
      numberSeat,
    },httpOptions)
  }

  public deleteVehicle(id){
    return this.httpClient.delete(`http://localhost:3000/vehicles/${id}`);
  }

}
