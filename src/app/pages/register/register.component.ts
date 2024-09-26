import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RegisterService } from '../../services/register/register.service';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  identityDocument = ''
  password = ''
  name = ''
  email = ''
  stratum = ''


  constructor(private registerService: RegisterService, private router:Router) { }

  createUser() {
    let user: User = {
      identityDocument: this.identityDocument,
      password: this.password,
      name: this.name,
      email: this.email,
      stratum: this.stratum,
    }
    this.registerService.createUser(user).subscribe((data:any) => {
      console.log(data)
      alert('El usuario ha sido registrado correctamente!')
      this.router.navigate(['/']);
    })
  }


}

