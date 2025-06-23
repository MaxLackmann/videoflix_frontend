import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-page',
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    MatIconModule,
    HeaderComponent,
  ],
  templateUrl: './reset-password-page.component.html',
  styleUrl: './reset-password-page.component.scss',
})
export class ResetPasswordPageComponent implements OnInit {
  token: string | null = null;
  form!: FormGroup;
  showPassword = false;
  showRepeatPassword = false;
  error: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      repeated_password: ['', Validators.required],
    });
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  submit(): void {
    if (this.form.invalid || !this.token) {
      this.error = 'Bitte beide Passwörter korrekt eingeben.';
      return;
    }
    const { password, repeated_password } = this.form.value;
    this.auth.resetPassword(this.token, password, repeated_password).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) =>
        (this.error = err.error?.detail?.[0] || 'Fehler beim Zurücksetzen.'),
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleRepeatPassword(): void {
    this.showRepeatPassword = !this.showRepeatPassword;
  }
}
