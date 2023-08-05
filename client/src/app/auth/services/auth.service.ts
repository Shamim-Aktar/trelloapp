import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { CurrentUser } from '../type/current-user';
import { RegisterRequestInterface } from '../type/registerRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  currentUser$ = new BehaviorSubject<CurrentUser | null | undefined>(
    undefined
  );
  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<CurrentUser> {
    const url = 'http://localhost:4001/api/user';
    return this.http.get<CurrentUser>(url)
  }

  register(registerRequest: RegisterRequestInterface): Observable<CurrentUser> {
    const url = "http://localhost:4001/api/users";
    return this.http.post<CurrentUser>(url, registerRequest)
  }

  setToken(currentUser: CurrentUser | null): void {
    localStorage.setItem('token', currentUser.token)
  }

  setCurrentUser(currentUser: CurrentUser | null): void {
    this.currentUser$.next(currentUser)
  }
}
