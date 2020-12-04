import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EditScheduleService {

  constructor(private httpClient : HttpClient) { }


  public updateSchedule(busID, date , id){
    // console.log(fullName)
    return this.httpClient.put(`http://localhost:3000/schedules/${id}`,{
      busID,
      date,
    },httpOptions)
  }
}
