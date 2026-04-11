import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMsg = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls as { [key: string]: any }; }

  onSubmit() {
    this.submitted = true;
    this.errorMsg = '';
    if (this.loginForm.invalid) {
      return;
    }
    const { usernameOrEmail, password } = this.loginForm.value;
    this.userService.login({ usernameOrEmail, password }).subscribe({
      next: (res: any) => {
        // Assume backend returns user role as 'admin'
        localStorage.setItem('role', 'admin');
        this.router.navigate(['/admin-trains']);
      },
      error: (err: any) => {
        this.errorMsg = err.error?.message || 'Login failed. Please try again.';
      }
    });
  }
}
