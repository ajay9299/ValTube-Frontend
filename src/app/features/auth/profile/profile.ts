import { Component, resource } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material-module';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { firstValueFrom } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-profile',
  imports: [MaterialModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  constructor(private readonly authService: AuthService) { }

  profileResource = resource({
    loader: () => firstValueFrom(this.authService.profile())
  });
}
