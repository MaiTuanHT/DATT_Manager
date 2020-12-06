import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient : HttpClient) { }

  public GetListClient(){
    return this.httpClient.get('http://localhost:3000/users/client');
  }

  public deleteUser(id){
    return this.httpClient.delete(`http://localhost:3000/users/admin/${id}`);
  }
}
