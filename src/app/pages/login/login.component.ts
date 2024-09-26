import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  identityDocument = ''
  password = ''

  constructor(private loginService: LoginService, private router:Router){}

  validate() {
    let user: User = {
      identityDocument: this.identityDocument,
      password: this.password,
    }

    this.loginService.loginUser(user).subscribe((data:any) => {
      console.log(data)
      this.router.navigate(['home']);
      localStorage.setItem('token', data.token)
    })
  }
}
