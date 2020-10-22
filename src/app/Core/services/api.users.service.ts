import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Users } from '../Moudels/users';



@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) { }

  getOrderById(id): Observable<Users> {
    return this.http.get<Users>(`${environment.UsersApiUrl}/${id}`);
  }

  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(environment.UsersApiUrl)
  }

  addUsers(users: Users): Observable<Users> {
    console.log(Users);
    return this.http.post<Users>(environment.UsersApiUrl, users)
  }

  editUsers(users: Users): Observable<Users> {
    return this.http.put<Users>(`${environment.UsersApiUrl}/${users.id}`, Users)
  }

  deleteUsers(id: number): Observable<Users> {
    return this.http.delete<Users>(`${environment.UsersApiUrl}/${id}`)
  }


}
