import { Injectable } from '@angular/core';
//Required modules
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';

//Environment
import { environment } from 'src/environments/environment';

//rxjs library functions
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  //get user list
  getUsers() {
    let headers: HttpHeaders = new HttpHeaders();
    return this.http
      .get<any>(`${environment.apiUrl}user`, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  //add user
  addAdmin(formData: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http
      .post<any>(`${environment.apiUrl}auth/register`, formData, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  //get user by id
  getAdminById(id: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http
      .get<any>(`${environment.apiUrl}influencer/${id}`, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          result.data.status = result.data.isActive ? 'Active': 'Inactive'
          result.data.profImage = result.data.profImage ? result.data.profImage: 'assets/assets/img/undraw_profile.svg'
          return result;
        })
      );
  }

  //updae the user
  updateAdmin(formData: any, id: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http
      .patch<any>(`${environment.apiUrl}admin/${id}`, formData, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }
  updateInfluencer(formData: any, id: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http
      .patch<any>(`${environment.apiUrl}influencer/${id}`, formData, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  //delete user
  deleteAdmin(id: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http
      .delete<any>(`${environment.apiUrl}user/${id}`, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  //Mark  user status user
  markStatusAdmin(id: any, formData: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http
      .patch<any>(`${environment.apiUrl}user/mark-status/${id}`, formData, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  //update profile image
  updateProfileImage(id: any, formData: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http
      .post<any>(`${environment.apiUrl}common/upload-profile-image/${id}`, formData, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  additionalInfo(formData: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http
      .post<any>(`${environment.apiUrl}influencer/update-profile-additional`, formData, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }
}
