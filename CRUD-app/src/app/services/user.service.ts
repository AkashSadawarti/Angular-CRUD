import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://jsonplaceholder.cypress.io/'
  constructor(private http: HttpClient) { }

  listUsers(): Observable<Object> {
    return this.http.get(`${this.baseUrl}` + 'todos')
  }

  viewUser(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}` + 'todos/' + id)
  }

  addUser(userObj: any) {
    return this.http.post(`${this.baseUrl}` + 'todos', userObj)
  }
  
  deleteUser(id: any) {
    return this.http.delete(`${this.baseUrl}` + 'todos/' + id)
  }

  updateUser(id: any, userObj : any){
      return this.http.put(`${this.baseUrl}` + 'todos/' + id, userObj)
  }
}
