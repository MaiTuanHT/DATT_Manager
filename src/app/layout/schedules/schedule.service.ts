import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient : HttpClient) { }

  public getSchedule(id){
    return this.httpClient.get(`http://localhost:3000/schedules/schedule/${id}`)
  }

  public updateSchedule(busID, date, price,vehicleID, id){
    // console.log(fullName)
    return this.httpClient.put(`http://localhost:3000/schedules/${id}`,{
      busID,
      date,
      price,
      vehicleID
    },httpOptions)
  }

  public GetListSchedule(){
    return this.httpClient.get('http://localhost:3000/schedules/agency');
  }

  public deleteSchedule(id){
    return this.httpClient.delete(`http://localhost:3000/schedules/${id}`)
  }


  public Schedule(busID, date,price,vehicleID){
    // console.log(fullName)
    return this.httpClient.post('http://localhost:3000/schedules/',{
      busID,
      date,
      price,
      vehicleID
    },httpOptions)
  }


}
