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
    this.saveToken(userData.token, userData.role, userData.id, userData);
    this.userData.next(userData);
  }

  //save token in localstorage
  saveToken(token: string, role: string, id:string, userData:any) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('id', id);
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  //get user token from localstorage
  getToken() {
    return localStorage.getItem('token');
  }

  //get user role from localstorage
  getRole() {
    return localStorage.getItem('role');
  }

  //get user id
  getId() {
    return localStorage.getItem('id');
  }

  getUserDetails() {
    return JSON.parse(localStorage.getItem('userData') || '')
  }

  //logout
  logout(user:string|null) {
    localStorage.clear();
    this.router.navigate(['']).then(res => {
      window.location.reload()
    });
  }
}
