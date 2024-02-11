import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Settings } from '@xxx/interfaces/settings.interface';
import { DEFAULT_LANGUAGE } from '@xxx/constants/default-language.constant';
import { StorageService } from '../storage/storage.service';
import { STORAGE_KEYS } from '@xxx/constants/storage-keys.constant';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private readonly _defaultSettings: Settings;
  private readonly _settingsSubject: BehaviorSubject<Settings>;

  public settings$: Observable<Settings>;

  public constructor(
    private readonly _loggerService: LoggerService,
    private readonly _storageService: StorageService,
  ) {
    this._defaultSettings = {
      language: DEFAULT_LANGUAGE,
    };

    this._settingsSubject = new BehaviorSubject<Settings>(
      this._storageService.getLocalStorageItem<Settings>(
        STORAGE_KEYS.SETTINGS,
      ) || this._defaultSettings,
    );

    this.settings$ = this._settingsSubject.asObservable();

    this._loggerService.logServiceInitialization('SettingsService');
  }

  public storeAndUpdateSettings(settings: Settings): void {
    this._storageService.setLocalStorageItem(STORAGE_KEYS.SETTINGS, settings);

    this._settingsSubject.next(settings);
  }
}
