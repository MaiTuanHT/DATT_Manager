import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EditRouteService {
  constructor(private httpClient : HttpClient) { }

  public UpdateRoute(startLocation, stopLocation , id){
    // console.log(fullName)
    return this.httpClient.put(`http://localhost:3000/routes/${id}`,{
      startLocation,
      stopLocation,
    },httpOptions)
  }
}
