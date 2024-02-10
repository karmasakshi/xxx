import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public constructor(private readonly _loggerService: LoggerService) {
    this._loggerService.logServiceInitialization('SettingsService');
  }
}
