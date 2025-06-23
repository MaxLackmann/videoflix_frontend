import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password-info-page',
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './forgot-password-info-page.component.html',
  styleUrl: './forgot-password-info-page.component.scss'
})
export class ForgotPasswordInfoPageComponent {

}
