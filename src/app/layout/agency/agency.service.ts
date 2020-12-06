import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private httpClient : HttpClient) { }

  public GetListAgency(){
    return this.httpClient.get('http://localhost:3000/agencys/admin');
  }

  public deleteAgency(id){
    return this.httpClient.delete(`http://localhost:3000/agencys/${id}`);
  }

}
