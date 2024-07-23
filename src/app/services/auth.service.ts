import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { Role } from '../models/role';
import { UserCurrent } from '../models/userCurrent';
import { CacheService } from './cache.service';
import { TokenStorageService } from './token-storage.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'http://localhost:8080/api/v1/users';

  private authApi = 'http://localhost:8080/api/v1';

  constructor(
    private http: HttpClient,
  ) { }

 
  login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/basicAuth/JwtResponse', {
      username,
      password
    }, httpOptions);
  }


  /*login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, null, { params: { username, password } });
  }*/

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getCurrentUser(): any {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }
}
