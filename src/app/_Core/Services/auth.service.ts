import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map } from 'rxjs';
//env import
import { environment } from 'src/environments/environment';
//model imports
import { User } from 'src/app/_Core/Models/user';
import { Router } from '@angular/router';
//Required modules
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Variables
  api_url: string = environment.apiUrl;
  private userData = new BehaviorSubject<User>({
    firstname: '',
    lastname: '',
    profImage: '',
    token: '',
    role: '',
    id: '',
  });
  readonly currentUserData = this.userData.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  //login api service
  login(params: object) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');

    return this.http
      .post(`${this.api_url}login`, params, {
        headers: headers,
      })
      .pipe(
        map((userData: any) => {
          console.log(userData.data);
          this.saveLoginDetails(userData?.data);
          return userData;
        })
      );
  }

  //user details in subject behaviour
  saveLoginDetails(userData: User) {
    this.saveToken(userData.token, userData.role);
    this.userData.next(userData);
  }

  //save token in localstorage
  saveToken(token: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  //get user token from localstorage
  getToken() {
    return localStorage.getItem('token');
  }

  //get user role from localstorage
  getRole() {
    return localStorage.getItem('role');
  }

  //logout
  logout() {
    localStorage.clear();
    this.router.navigate(['admin/login']);
  }
}
