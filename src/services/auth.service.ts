import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  private authStatusSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.authStatusSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  register(data: {
    email: string;
    password: string;
    repeated_password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/userapp/register/`, data);
  }

  verifyEmail(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-email/`, { token });
  }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/userapp/login/`, data).pipe(
      tap((tokens) => {
        localStorage.setItem('access_token', tokens.access);
        localStorage.setItem('refresh_token', tokens.refresh);
        this.authStatusSubject.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.authStatusSubject.next(false);
    this.router.navigate(['/login']);
  }

  requestPasswordReset(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password/`, { token });
  }

  resetPassword(
    token: string,
    password: string,
    repeated_password: string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password/`, {
      token,
      password,
      repeated_password,
    });
  }
}
