import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>(this.baseUrl);
  }
}
