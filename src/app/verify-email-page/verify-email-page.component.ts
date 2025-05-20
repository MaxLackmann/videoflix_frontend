import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from '../../services/mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-email-page',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './verify-email-page.component.html',
  styleUrls: ['./verify-email-page.component.scss'],
})
export class VerifyEmailPageComponent implements OnInit {
  loading = true;
  success = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private mailService: MailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const uid = this.route.snapshot.queryParamMap.get('uid');
    const token = this.route.snapshot.queryParamMap.get('token');
    if (!uid || !token) {
      this.loading = false;
      this.success = false;
      return;
    }
    this.mailService.verifyEmail(uid, token).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        setTimeout(() => this.router.navigate(['/videos']), 1500);
      },
      error: (err) => {
        this.error = err.error?.detail?.[0] || 'Verifizierung fehlgeschlagen.';
        this.loading = false;
      },
    });
  }
}
