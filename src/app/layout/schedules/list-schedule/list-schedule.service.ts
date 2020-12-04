import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListScheduleService {

  constructor(private httpClient : HttpClient) { }

  public GetListSchedule(){
    return this.httpClient.get('http://localhost:3000/schedules/agency');
  }

}
