import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  private currentUser: User | null = null;

  login(user: User): boolean {
    if (user.username === 'test' && user.password === 'password') {
      this.isLoggedInSubject.next(true);
      this.currentUser = user;
      localStorage.setItem('username', user.username);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    this.currentUser = null;
    localStorage.removeItem('username');
    this.router.navigate(['/homepage']);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  constructor(private router: Router) { }
}
