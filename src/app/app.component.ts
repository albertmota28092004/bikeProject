import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BikesComponent } from './pages/bikes/bikes.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, BikesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'BikesProject';
}
