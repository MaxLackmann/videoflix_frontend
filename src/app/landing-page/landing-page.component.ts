import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[^@]+@[^@]+\.[^@]+$/),
        ],
      ],
    });
  }

  goRegister() {
    if (this.form.valid) {
      const email = this.form.value.email;
      this.router.navigate(['/register'], { queryParams: { email } });
    }
  }
}
