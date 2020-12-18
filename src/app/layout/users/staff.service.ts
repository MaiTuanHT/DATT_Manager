import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private httpClient : HttpClient) { }

  public GetListStaff(){
    return this.httpClient.get('http://localhost:3000/users/list-staff');
  }

  public deleteStaff(id){
    console.log("user id : " , id)
    return this.httpClient.delete(`http://localhost:3000/users/${id}`);
  }

  public getStaff(id){
    return this.httpClient.get(`http://localhost:3000/users/${id}`);
  }

}
