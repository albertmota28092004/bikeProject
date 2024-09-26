import { Component } from '@angular/core';
import { BikesComponent } from '../../../pages/bikes/bikes.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BikesComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router:Router){}

  signOut() {
    localStorage.removeItem('token')
    this.router.navigate(['/']);
  }
}
