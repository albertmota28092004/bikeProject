import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  cedula = 12345
  contrasena = 12345

  constructor(private router:Router){}

  validar(cedula_usuario:number, contrasena_usuario:number) {
    if (this.cedula == cedula_usuario && this.contrasena == contrasena_usuario) {
      this.router.navigate(['home']);

    }
  }
}
