import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { BikeService } from '../../services/bike/bike.service';

@Component({
  selector: 'app-bikes',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.scss'
})
export class BikesComponent {
  brand = ''
  color = ''
  location = ''
  state = ''
  rentalPrice = ''

  constructor(private bikeService: BikeService, private router:Router){}

  

}
