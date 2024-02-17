import { Component } from '@angular/core';
import { LoggerService } from '@xxx/services/logger/logger.service';

@Component({
  selector: 'xxx-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  public constructor(private readonly _loggerService: LoggerService) {
    this._loggerService.logComponentInitialization('HomePageComponent');
  }
}
