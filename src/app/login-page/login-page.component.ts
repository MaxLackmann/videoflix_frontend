import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLink, MatIconModule, MatCheckboxModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  showPassword = false;
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
