import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { LANGUAGES } from '@xxx/constants/languages.constant';
import { Language } from '@xxx/interfaces/language.interface';
import { Settings } from '@xxx/interfaces/settings.interface';
import { AlertService } from '@xxx/services/alert/alert.service';
import { LoggerService } from '@xxx/services/logger/logger.service';
import { SettingsService } from '@xxx/services/settings/settings.service';

@Component({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    TranslocoModule,
  ],
  selector: 'xxx-language-menu',
  standalone: true,
  styleUrl: './language-menu.component.scss',
  templateUrl: './language-menu.component.html',
})
export class LanguageMenuComponent {
  public languages: Language[];
  public settings: Settings;

  public constructor(
    private readonly _translocoService: TranslocoService,
    private readonly _alertService: AlertService,
    private readonly _loggerService: LoggerService,
    private readonly _settingsService: SettingsService,
  ) {
    this.languages = LANGUAGES;

    this.settings = this._settingsService.settings;

    this._loggerService.logComponentInitialization('LanguageMenuComponent');
  }

  public setLanguage(language: Language): void {
    this._settingsService.storeAndUpdateSettings({
      language,
    });

    this._alertService.showAlert(
      this._translocoService.translate('alerts.reload-to-apply'),
      this._translocoService.translate('alerts.reload-cta'),
      (): void => {
        location.reload();
      },
    );
  }
}
