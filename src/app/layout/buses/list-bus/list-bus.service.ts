import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListBusService {

  constructor(private httpClient : HttpClient) { }

  public GetListBus(){
    return this.httpClient.get('http://localhost:3000/buses/agency');
  }

  public deleteBus(id){
    return this.httpClient.delete(`http://localhost:3000/buses/${id}`);
  }

}
