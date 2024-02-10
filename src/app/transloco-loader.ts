import { Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './services/logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TranslocoHttpLoader implements TranslocoLoader {
  public constructor(
    private readonly _httpClient: HttpClient,
    private readonly _loggerService: LoggerService,
  ) {
    this._loggerService.logServiceInitialization('TranslocoHttpLoader');
  }

  public getTranslation(language: string) {
    return this._httpClient.get<Translation>(`/assets/i18n/${language}.json`);
  }
}
