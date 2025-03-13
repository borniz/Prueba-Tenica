import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPlane: string = '1';
  planes = ['1', '2', '3', '4'];
  index = 0;
  screenSize: string = 'desktop';

  constructor() {
    this.updateScreenSize();
    this.startAnimation();
  }

  @HostListener('window:resize', [])
  updateScreenSize() {
    const width = window.innerWidth;

    if (width <= 480) {
      this.screenSize = 'mobile';
    } else if (width <= 1024) {
      this.screenSize = 'tablet';
    } else {
      this.screenSize = 'desktop';
    }
  }

  startAnimation() {
    setInterval(() => {
      this.index = (this.index + 1) % this.planes.length;
      this.currentPlane = this.planes[this.index];
    }, 250);
  }

  getImagePath(plane: string): string {
    let baseName = 'Destiantion-Select';

    if (this.screenSize === 'mobile') {
      baseName += 'R480';
    } else if (this.screenSize === 'tablet') {
      baseName += 'R768';
    }

    return `/${baseName}${plane}.png`;
  }
}
