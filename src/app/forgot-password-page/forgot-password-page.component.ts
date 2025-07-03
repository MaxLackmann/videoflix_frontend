
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    MatIconModule,
    ReactiveFormsModule
],
  templateUrl: './forgot-password-page.component.html',
  styleUrl: './forgot-password-page.component.scss',
})
export class ForgotPasswordPageComponent {
  form: FormGroup;
  submitted = false;
  success = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.error = 'Bitte gib eine gültige E-Mail-Adresse ein.';
      return;
    }
    const email = this.form.value.email;
    this.auth.requestPasswordReset(email).subscribe({
      next: () => this.router.navigate(['/forgot-password-info']),
      error: (err: any) =>
        (this.error = err.error?.detail?.[0] || 'Fehler beim Zurücksetzen.'),
    });
  }
}
