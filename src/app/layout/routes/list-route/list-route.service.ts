import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListRouteService {

  constructor(private httpClient : HttpClient) { }

  public GetListRoute(){
    return this.httpClient.get('http://localhost:3000/routes/agency');
  }

}
