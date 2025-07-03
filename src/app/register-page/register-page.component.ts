import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    MatIconModule,
    ReactiveFormsModule
],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  showPassword = false;
  showRepeatPassword = false;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      email: [
        this.route.snapshot.queryParamMap.get('email') || '',
        [Validators.required, Validators.email],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
      repeated_password: ['', Validators.required],
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleRepeatPassword(): void {
    this.showRepeatPassword = !this.showRepeatPassword;
  }

  register(): void {
    console.log('Register form submitted', this.form.value);
    if (this.form.invalid) {
      console.warn('Form invalid');
      return;
    }
    this.auth.register(this.form.value).subscribe({
      next: () => this.router.navigate(['/verify-email-info']),
      error: (err) => alert('Fehler: ' + JSON.stringify(err.error)),
    });
  }
}
