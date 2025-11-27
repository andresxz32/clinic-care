import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }) {
    return this.http.post('/api/auth/login', credentials).pipe(
      tap((res: any) => {
        localStorage.setItem('access_token', res.accessToken);
        this.currentUserSubject.next(res.user);
      })
    );
  }

  refreshToken() {
    return this.http.post('/api/auth/refresh', {}, { withCredentials: true }).pipe(
      tap((res: any) => {
        localStorage.setItem('access_token', res.accessToken);
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.currentUserSubject.next(null);
    return this.http.post('/api/auth/logout', {});
  }

  getToken(): string {
    return localStorage.getItem('access_token') || '';
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
