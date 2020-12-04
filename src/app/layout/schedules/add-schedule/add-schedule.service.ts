import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddScheduleService {

  constructor(private httpClient : HttpClient) { }


  public Schedule(busID, date){
    // console.log(fullName)
    return this.httpClient.post('http://localhost:3000/schedules/',{
      busID,
      date,
    },httpOptions)
  }

}
