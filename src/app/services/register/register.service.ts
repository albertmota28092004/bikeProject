import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:3000/api/users/signup';

  constructor(private http: HttpClient) {}

  createUser(user: any) {
    // Realiza una solicitud POST al backend para crear una nueva publicación
    return this.http.post(this.baseUrl, user);
  }

}
