import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { LoggerService } from '@xxx/services/logger/logger.service';

@Component({
  selector: 'xxx-help-page',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.scss',
})
export class HelpPageComponent {
  public constructor(private readonly _loggerService: LoggerService) {
    this._loggerService.logComponentInitialization('HelpPageComponent');
  }
}
