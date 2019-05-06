import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://localhost:4444';


  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}` + `/getusers`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}` + `/deleteuser?id=${id}`);
  }

  createUsers(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}` + `/adduser`, user, {
      headers:
        { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  updateUsers(user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}` + `/updateuser`, user, {
      headers:
        { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

}
