import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListStaffService {

  constructor(private httpClient : HttpClient) { }

  public GetListStaff(){
    return this.httpClient.get('http://localhost:3000/users/list-staff');
  }
}
