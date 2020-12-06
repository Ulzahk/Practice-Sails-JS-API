import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ride } from 'src/models/ride';

@Injectable()
export class RideService {
  private url = 'http://localhost:1337/user';
  constructor (
    private http: HttpClient
  ){

  }

  public login(credential: Credential) {
    return this.http.post(`${this.url}/login`, credential);
  }

  public signup(credential: Credential) {
    return this.http.post(`${this.url}/signup`, credential);
  }

}