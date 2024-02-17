import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { LoggerService } from '@xxx/services/logger/logger.service';

@Component({
  selector: 'xxx-home-page',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  public constructor(private readonly _loggerService: LoggerService) {
    this._loggerService.logComponentInitialization('HomePageComponent');
  }
}
