import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}

  getALLCallHistory() {
    return this.httpClient.get(
      environment.apiUrl + `/api/admin-panel/statistics/calls`
    );
  }
}
