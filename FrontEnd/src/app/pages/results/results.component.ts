import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-results',
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  city: string | null = null;
  country: string | null = null;
  budget: number = 0;
  currency: String | null = null;
  currencySymbol: String | null = null;
  currencyExChange: number | null = null;
  change: number | null = null;
  weather: any = null;

  private weatherService = inject(WeatherService);
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.city = params['city'];
      this.country = params['country'];
      this.budget = params['budget'];
      this.localCurrency();
      if (this.city && this.country) {
        this.getWeatherData();
      }
    });
  }
  getWeatherData() {
    this.weatherService.getWeather(this.city!, this.country!).subscribe(
      (data) => {
        this.weather = {
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        };
      },
      (error) => {
        console.error('Error obteniendo el clima:', error);
      }
    );
  }

  localCurrency() {
    if (!this.country) return;

    switch (this.country) {
      case 'Inglaterra':
        this.currency = 'Libra Esterlina';
        this.currencySymbol = '£';
        this.change = 5355.17;
        this.currencyExChange = this.budget * this.change;
        break;
      case 'Japón':
        this.currency = 'Yen';
        this.currencySymbol = '¥';
        this.change = 0.036;
        this.currencyExChange = this.budget * this.change;
        break;
      case 'India':
        this.currency = 'Rupias Indias';
        this.currencySymbol = '₹';
        this.change = 0.02124;
        this.currencyExChange = this.budget * this.change;
        break;
      case 'Dinamarca':
        this.currency = 'Corona danesa';
        this.currencySymbol = 'kr';
        this.change = 0.0017;
        this.currencyExChange = this.budget * this.change;
        break;
      default:
        console.error('País no reconocido:', this.country);
        return;
    }
  }
}
