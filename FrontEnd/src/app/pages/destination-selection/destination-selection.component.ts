import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-destination-selection',
  imports: [CommonModule, RouterModule,TranslateModule],
  templateUrl: './destination-selection.component.html',
  styleUrl: './destination-selection.component.css',
})
export class DestinationSelectionComponent {
  countries = [
    {
      name: 'Inglaterra',
      cities: ['Londres', 'Manchester'],
      flag: 'https://flagcdn.com/w320/gb.png',
    },
    {
      name: 'Japón',
      cities: ['Tokio', 'Osaka'],
      flag: 'https://flagcdn.com/w320/jp.png',
    },
    {
      name: 'India',
      cities: ['Nueva Delhi', 'Mumbai'],
      flag: 'https://flagcdn.com/w320/in.png',
    },
    {
      name: 'Dinamarca',
      cities: ['Copenhague', 'Aarhus'],
      flag: 'https://flagcdn.com/w320/dk.png',
    },
  ];

  selectedCountry: any = null;
  selectedCity: string = '';
  flag: string = '';
  showFlag: boolean = false;
  constructor(private router: Router) {}

  onCountryChange(event: any) {
    const countryName = event.target.value;
    this.selectedCountry = this.countries.find((c) => c.name === countryName);
    this.selectedCity = '';
    this.flag = this.selectedCountry ? this.selectedCountry.flag : '';
  }

  onCityChange(event: any) {
    this.selectedCity = event.target.value;
  }

  goToNextPage() {
    if (this.selectedCountry && this.selectedCity) {
      this.router.navigate(['/budget'], {
        queryParams: {
          country: this.selectedCountry.name,
          city: this.selectedCity,
          flag: this.flag,
        },
      });
    }
  }
}
