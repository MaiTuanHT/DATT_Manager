import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DecodeJwtService {

  constructor(private tokenStorageService: TokenStorageService) { }

  getDecodedAccessToken(): any {
    try{
        return jwt_decode(this.tokenStorageService.getToken());
    }
    catch(Error){
        return null;
    }
  }
}
