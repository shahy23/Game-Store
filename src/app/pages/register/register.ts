import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
})
export class Register {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private auth: AuthService, private router: Router) {}

  get passwordsMatch(): boolean {
    return !this.confirmPassword || this.password === this.confirmPassword;
  }

  submit(form: NgForm) {
    if (form.invalid || !this.passwordsMatch) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }
    this.auth.register(this.fullName, this.email, this.password);
    this.router.navigate(['/']);
  }
}
