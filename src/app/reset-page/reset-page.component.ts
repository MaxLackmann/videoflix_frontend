import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-reset-page',
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLink, MatIconModule, HeaderComponent],
  templateUrl: './reset-page.component.html',
  styleUrl: './reset-page.component.scss'
})
export class ResetPageComponent {
  showPassword = false;
  showRepeatPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleRepeatPassword(): void {
    this.showRepeatPassword = !this.showRepeatPassword;
  }
}
