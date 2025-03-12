import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'T4bd69494477427768f501a878cdf63a8'; 
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string, countryCode: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city},${countryCode}&appid=${this.apiKey}&units=metric&lang=es`;
    return this.http.get(url);
  }
}
