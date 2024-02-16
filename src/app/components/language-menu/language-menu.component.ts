import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import { LANGUAGES } from '@xxx/constants/languages.constant';
import { Language } from '@xxx/interfaces/language.interface';
import { Settings } from '@xxx/interfaces/settings.interface';
import { LoggerService } from '@xxx/services/logger/logger.service';
import { SettingsService } from '@xxx/services/settings/settings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'xxx-language-menu',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    TranslocoModule,
  ],
  templateUrl: './language-menu.component.html',
  styleUrl: './language-menu.component.scss',
})
export class LanguageMenuComponent {
  public languages: Language[];
  public settings$: Observable<Settings>;

  public constructor(
    private readonly _loggerService: LoggerService,
    private readonly _settingsService: SettingsService,
  ) {
    this.languages = LANGUAGES;

    this.settings$ = this._settingsService.settings$;

    this._loggerService.logComponentInitialization('LanguageMenuComponent');
  }

  public setLanguage(language: Language): void {
    this._settingsService.storeAndUpdateSettings({ language });
  }
}
