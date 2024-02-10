import { Injectable, inject } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private _loggerService: LoggerService;

  constructor() {
    this._loggerService = inject(LoggerService);

    this._loggerService.logServiceInitialization('SettingsService');
  }
}
