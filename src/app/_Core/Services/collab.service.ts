import { Injectable } from '@angular/core';
//Required modules
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';

//Environment
import { environment } from 'src/environments/environment';

//rxjs library functions
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollabService {

  constructor(private http: HttpClient) {}

  //request collab
  requestCollab(body:any) {
    let headers: HttpHeaders = new HttpHeaders();
    return this.http
      .post<any>(`${environment.apiUrl}collab/request-collab`, body , {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  //reject collab
  rejectCollab(id:any) {
    let headers: HttpHeaders = new HttpHeaders();
    return this.http
      .post<any>(`${environment.apiUrl}collab/reject-collab/${id}`, {} , {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  //accept collab
  acceptCollab(id:any) {
    let headers: HttpHeaders = new HttpHeaders();
    return this.http
      .post<any>(`${environment.apiUrl}collab/accept-collab/${id}`, {} , {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  // get collab list
  getCollabList(filters:any) {
    let headers: HttpHeaders = new HttpHeaders();
    return this.http
      .get<any>(`${environment.apiUrl}collab/get-collab-list/${filters}`, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  // get collab list by id
  getCollabById(id:string|null, status:string) {
    let headers: HttpHeaders = new HttpHeaders();
    return this.http
      .get<any>(`${environment.apiUrl}collab/get-collab-by-id/${id}/${status}`, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }


}
