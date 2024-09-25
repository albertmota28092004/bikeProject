import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-bikes',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.scss'
})
export class BikesComponent {


}
