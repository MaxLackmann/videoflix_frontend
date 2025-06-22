import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password-page',
  imports: [CommonModule, HeaderComponent, FooterComponent, MatIconModule, ReactiveFormsModule],
  templateUrl: './forgot-password-page.component.html',
  styleUrl: './forgot-password-page.component.scss',
})
export class ForgotPasswordPageComponent {
  form: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder, private authservice: AuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    this.authservice.requestPasswordReset(this.form.value.email).subscribe({
      next: () => {
        this.success = true;
      },
      error: () => {
        this.success = false;
      },
    });
  }
}
