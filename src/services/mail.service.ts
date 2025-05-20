import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private apiUrl = 'http://127.0.0.1:8000/api/userapp';

  constructor(private http: HttpClient) {}

  verifyEmail(uid: string, token: string): Observable<any> {
    const body = { uid, token };
    return this.http.post(`${this.apiUrl}/verify-email/`, body);
  }
}