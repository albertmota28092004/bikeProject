import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:3000/api/users/login';

  constructor(private http: HttpClient) {}

  loginUser(userLogin: any) {
    // Realiza una solicitud POST al backend para crear una nueva publicación
    return this.http.post(this.baseUrl, userLogin);
  }
}
