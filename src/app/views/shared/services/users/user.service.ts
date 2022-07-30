import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers<T>() {
    return this.http.get<T>(environment.api + 'users');
  }

  getUserById<T>(userId: number) {
    return this.http.get<T>(`${environment.api}users/${userId}`);
  }

  addUser<T>(user: T) {
    return this.http.post<T>(environment.api + 'users', user);
  }

  updateUser<T>(user: T, userId) {
    return this.http.put<T>(`${environment.api}users/${userId}`, user);
  }

  deleteUser(userId) {
    return this.http.delete(`${environment.api}users/${userId}`);
  }
}
