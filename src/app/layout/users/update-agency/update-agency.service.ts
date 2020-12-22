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

  public getAgency(){
    return this.httpClient.get('http://localhost:3000/agencys/agency')
  }


  public AgencyUpdate(nameAgency, phoneNumber , discription, policy,utilities, ticketPaymentDealine){
    return this.httpClient.put(`http://localhost:3000/agencys/update`,{
      nameAgency,
      phoneNumber,
      discription,
      policy,
      utilities,
      ticketPaymentDealine
    },httpOptions)
  }

  public Ticket(formData){

    console.log("form data : ", formData)
   
    return this.httpClient.post('http://localhost:3000/images',
     formData,{
      headers:{
        enctype: 'multipart/form-data'
      }
     },
    )
  }

}
