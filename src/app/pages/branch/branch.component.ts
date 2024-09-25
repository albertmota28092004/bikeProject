import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-branch',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.scss'
})
export class BranchComponent {

}
