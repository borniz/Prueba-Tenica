import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-budget',
  imports: [CommonModule,TranslateModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css',
})
export class BudgetComponent {
  country: string | null = null;
  city: string | null = null;
  budget: number | null = null;
  flag: string = '';
  currentPlane: string = 'takeoff';
  planes = ['takeoff', 'flying', 'landing'];
  index = 0;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.country = params['country'];
      this.city = params['city'];
    });
    this.startAnimation();
  }
  startAnimation() {
    setInterval(() => {
      this.index = (this.index + 1) % this.planes.length;
      this.currentPlane = this.planes[this.index];
    }, 2000); 
  }

  onBudgetChange(event: any) {
    this.budget = event.target.value;
  }
  gotonextpage() {
    if (this.budget) {
      this.router.navigate(['/results'], {
        queryParams: {
          city: this.city,
          country: this.country,
          budget: this.budget,
          flag: this.flag,
        },
      });
    } else {
      alert('"Digite un monto Porfavor"');
    }
  }
}
