import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VideoService {
  private apiUrl = 'http://127.0.0.1:8000/api/content/videos';

  constructor(private http: HttpClient) {}

  getVideo(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/`);
  }
}
