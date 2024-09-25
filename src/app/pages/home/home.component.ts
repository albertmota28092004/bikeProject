import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { BikesComponent } from '../bikes/bikes.component';
import { RouterModule } from '@angular/router';

const iconUrl = 'assets/marker-icon.png';
const logo_sena = '../assets/logo-sena.png'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  logo_sena = logo_sena
}
