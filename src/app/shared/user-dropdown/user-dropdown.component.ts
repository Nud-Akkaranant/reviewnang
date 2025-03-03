import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-dropdown',
  standalone: false,
  templateUrl: './user-dropdown.component.html',
  styleUrl: './user-dropdown.component.css'
})
export class UserDropdownComponent implements OnInit {
  isDropdownOpen: boolean = false;
  currentUser: any;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.currentUser = user;
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    setTimeout(() => {
      this.isDropdownOpen = false;
    }, 150);
  }


}
