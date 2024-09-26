import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private baseUrl = 'http://localhost:3000/api/bikes/';

  constructor(private http: HttpClient) { }

  createBike(bike:any){
    return this.http.post(this.baseUrl, bike);
  }
}
