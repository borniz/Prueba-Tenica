import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}

  gethistorial(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/get-history`);
  }
  postquery(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/save-query`, data);
  }
}
