import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { UserDropdownComponent } from '../../shared/user-dropdown/user-dropdown.component';
import { MovieService } from '../../services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit, OnDestroy {
  private authStateSubscription: Subscription | null = null;
  isDropdownOpen: boolean = false;

  isLoggedIn: boolean = false;
  currentUser: User | null = null;

  constructor(
    public authService: AuthService,
    public movieService: MovieService
  ) {
    this.authStateSubscription = this.authService.authState.subscribe(
      (user) => {
        this.isLoggedIn = !!user;
        this.currentUser = user;
      }
    );
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    setTimeout(() => {
      this.isDropdownOpen = false;
    }, 150);
  }

  ngOnInit() { }

  ngOnDestroy(): void {
    if (this.authStateSubscription) {
      this.authStateSubscription.unsubscribe();
    }
  }
}
