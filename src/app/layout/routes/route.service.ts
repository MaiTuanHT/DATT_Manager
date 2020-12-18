import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private httpClient : HttpClient) { }

  public Route(startLocation, stopLocation){
    return this.httpClient.post('http://localhost:3000/routes/',{
      startLocation,
      stopLocation,
    },httpOptions)
  }


  public getRoute(id){
    return this.httpClient.get(`http://localhost:3000/routes/${id}`)
  }

  public UpdateRoute(startLocation, stopLocation , id){
    return this.httpClient.put(`http://localhost:3000/routes/${id}`,{
      startLocation,
      stopLocation,
    },httpOptions)
  }

  public GetListRoute(){
    return this.httpClient.get('http://localhost:3000/routes/agency');
  }

  public deleteRoute(id){
    return this.httpClient.delete(`http://localhost:3000/routes/${id}`);
  }

}
