import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../../../shared/material/material-module';

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

  loginForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('',[
      Validators.required
    ]),
  });

  loginError: string = '';

  onSubmit(){
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      // Simulate authentication logic
      const { userName, password } = this.loginForm.value;
      if (userName === 'admin' && password === 'password') {
        // Successful login
        this.loginError = '';
        console.log('Login successful');
        // Navigate to dashboard or home page
      } else {
        // Invalid credentials
        this.loginError = 'Invalid username or password. Please try again.';
      }
    } else {
      this.loginError = 'Please fill in all required fields.';
    }
  }
}
