import { Component, Injectable } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-record',
  imports: [CommonModule,TranslateModule,],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css',
})
export class RecordComponent {
  history: any[] = [];
  constructor(private apiService: ApiService) {
    this.apiService.gethistorial().subscribe((data) => {
      console.log(data.data);
    });
  }
  ngOnInit() {
    this.getHistory();
  }
  getHistory() {
    this.apiService.gethistorial().subscribe((data) => {
      this.history = data.data;
    });
  }
}
