import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UpdateAgencyService {

  constructor(private httpClient : HttpClient) { }


  public AgencyUpdate(nameAgency, phoneNumber , discription, policy,utilities){
    return this.httpClient.put(`http://localhost:3000/agencys/update`,{
      nameAgency,
      phoneNumber,
      discription,
      policy,
      utilities
    },httpOptions)
  }

}
