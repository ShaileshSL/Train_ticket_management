import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
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
        // Assume backend returns user role as 'user'
        localStorage.setItem('role', 'user');
        this.router.navigate(['/bookings']);
      },
      error: (err: any) => {
        this.errorMsg = err.error?.message || 'Login failed. Please try again.';
      }
    });
  }
}
