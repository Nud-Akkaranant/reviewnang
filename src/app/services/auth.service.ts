import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: User | null = null;

  login(user: User): boolean {
    if (user.username === 'test' && user.password === 'password') {
      this.isLoggedIn = true;
      this.currentUser = user;
      localStorage.setItem('username', user.username);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = null;
    localStorage.removeItem('username');
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  constructor() { }
}
