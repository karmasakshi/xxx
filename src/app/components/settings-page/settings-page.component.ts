import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { LoggerService } from '@xxx/services/logger/logger.service';

@Component({
  imports: [TranslocoModule],
  selector: 'xxx-settings-page',
  standalone: true,
  styleUrl: './settings-page.component.scss',
  templateUrl: './settings-page.component.html',
})
export class SettingsPageComponent {
  public constructor(private readonly _loggerService: LoggerService) {
    this._loggerService.logComponentInitialization('SettingsPageComponent');
  }
}
