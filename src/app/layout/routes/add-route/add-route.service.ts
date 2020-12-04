import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AddRouteService {

  constructor(private httpClient : HttpClient) { }

  public Route(startLocation, stopLocation){
    // console.log(fullName)
    return this.httpClient.post('http://localhost:3000/routes/',{
      startLocation,
      stopLocation,
    },httpOptions)
  }

}
