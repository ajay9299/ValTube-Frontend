import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../../../shared/material/material-module';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private readonly authService: AuthService) { }

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  });

  loginError: string = '';

  onSubmit() {
    if (this.loginForm.valid) {
      // Simulate authentication logic
      const { username, password } = this.loginForm.value;
      if (username && password) {
        // Successful login
        this.loginError = '';
        this.authService.login({ username, password })
          .subscribe({
            next: (res) => {
              console.log('Login success', res);
            },
            error: (err) => {
              console.log('Login failed', err);
            }
          });
      }
    } else {
      this.loginError = 'Please fill in all required fields.';
    }
  }
}
