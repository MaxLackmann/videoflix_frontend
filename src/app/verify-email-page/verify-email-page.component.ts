
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-verify-email-page',
  imports: [HeaderComponent],
  templateUrl: './verify-email-page.component.html',
  styleUrls: ['./verify-email-page.component.scss'],
})
export class VerifyEmailPageComponent implements OnInit {
  loading = true;
  success = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit ausgeführt');
    const token = this.route.snapshot.queryParamMap.get('token');
    console.log('Token aus URL:', token);

    if (!token) {
      this.loading = false;
      this.success = false;
      return;
    }

    console.log('Starte verifyEmail API-Call');
    this.authService.verifyEmail(token).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        this.location.replaceState('/verify-email');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      },

      error: (err: any) => {
        console.log('verifyEmail error:', err);
        this.error = err.error?.detail?.[0] || 'Verifizierung fehlgeschlagen.';
        this.loading = false;
      },
    });
  }
}
