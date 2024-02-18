import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { LoggerService } from '@xxx/services/logger/logger.service';

@Component({
  imports: [TranslocoModule],
  selector: 'xxx-help-page',
  standalone: true,
  styleUrl: './help-page.component.scss',
  templateUrl: './help-page.component.html',
})
export class HelpPageComponent {
  public constructor(private readonly _loggerService: LoggerService) {
    this._loggerService.logComponentInitialization('HelpPageComponent');
  }
}
