import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {
  constructor(private router:Router){}

  bicicletaAlquilada() {
    this.router.navigate(['home']);
    alert('¡Tu bicicleta ha sido alquilada con éxito! Dirígete a la dirección para reclamarla')
  }
}
