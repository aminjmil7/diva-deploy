import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/admin-panel/users');
  }

  find(userId: number): Observable<any> {
    return this.httpClient.get(
      environment.apiUrl + `/api/admin-panel/users/${userId}`
    );
  }
}
