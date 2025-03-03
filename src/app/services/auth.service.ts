import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStateSubject = new BehaviorSubject<User | null>(null);
  authState: Observable<User | null> = this.authStateSubject.asObservable();

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        this.currentUser = { username: storedUsername, password: '' };
        this.authStateSubject.next(this.currentUser);
      }
    }
  }

  private currentUser: User | null = null;

  login(user: User): boolean {
    if (user.username === 'test' && user.password === 'test') {
      this.currentUser = user;
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('username', user.username);
      }
      this.authStateSubject.next(this.currentUser);
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('username');
    }
    this.authStateSubject.next(null);
    this.router.navigate(['/homepage']);
  }

  isUserLoggedIn(): boolean {
    return !!this.currentUser;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
