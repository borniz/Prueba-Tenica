import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPlane: string = '1';
  planes = ['1', '2', '3', '4'];
  index = 0;
  screenSize: string = 'desktop';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'de']);
    this.translate.setDefaultLang('es');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/es|de/) ? browserLang : 'es');
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
  changeLanguage(lang: string) {
    this.translate.use(lang);
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
