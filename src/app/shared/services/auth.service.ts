import {Injectable} from '@angular/core';
import {User} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = null;
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>('http://localhost:8077/api/auth/login', user)
      .pipe(
        tap(
          (token) => {
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          }
        )
      );
  }
  setToken(token: string): void {
    this.token = token;
  }
  getToken(): string {
    return this.token;
  }
  isAuthenticated(): boolean {
    return !!this.token;
  }
  logout(): void {
    this.setToken(null);
    localStorage.removeItem('auth-token');
  }
  register(): void{}

}
