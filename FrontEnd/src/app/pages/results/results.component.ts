import { Component, inject, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-results',
  imports: [CommonModule, TranslateModule],
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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiservice: ApiService
  ) {
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
    if (!this.city) return;

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        if (data?.current_condition?.length > 0) {
          this.weather = {
            temp: data.current_condition[0].temp_C,
            description: data.current_condition[0].weatherDesc[0].value,
          };
          console.log('Clima recibido:', this.weather);
        } else {
          console.warn('Respuesta inesperada del servicio del clima', data);
        }
      },
      error: (error) => {
        console.error('Error obteniendo el clima:', error);
      },
    });
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
  postRecord() {
    const data = {
      country: this.country,
      city: this.city,
      currency: this.currency,
      currency_symbol: this.currencySymbol,
      climate: this.weather.description,
      temp: this.weather.temp + '°C',
      budget: Number(this.budget),
      exchange_rate: Number(this.currencyExChange),
      converted_budget: Number(this.change),
    };
    this.apiservice.postquery(data).subscribe({
      next: () => {
        console.log('Registro guardado correctamente');
        this.router.navigate(['/destination-selection']);
      },
      error: (error) => {
        console.error('Error guardando el registro:', error);
      },
    });
  }
}
