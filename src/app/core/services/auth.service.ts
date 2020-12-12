import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { isBefore, add, getTime } from 'date-fns';

interface IUser {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signin(email: string, password: string) {}

  signup(email: string, password: string) {
    return this.http.post('/signup', { email, password }).pipe(
      tap((res) => {
        this.setSession(res);
        return res;
      })
    );
  }

  private setSession(authResult) {
    const expiresAt = add(new Date(), {
      seconds: authResult.expiresIn / 1000,
    });

    console.log(expiresAt);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return isBefore(new Date(), this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return getTime(expiresAt);
  }
}
