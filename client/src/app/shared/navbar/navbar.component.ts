import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('role');
  }

  get isAdmin(): boolean {
    return localStorage.getItem('role') === 'admin';
  }

  get isUser(): boolean {
    return localStorage.getItem('role') === 'user';
  }

  logout() {
    localStorage.removeItem('role');
    window.location.href = '/login';
  }
}
