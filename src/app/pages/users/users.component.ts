import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: any[] = [{}]

  constructor(private userService:UsersService){}

  ngOnInit() {
    this.showUsers()
  }

  showUsers(){
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data
    })
  }

}
