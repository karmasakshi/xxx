import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderConfiguration } from '@xxx/interfaces/loader-configuration.interface';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private readonly _defaultLoaderConfiguration: LoaderConfiguration;
  private readonly _loaderConfigurationSubject: BehaviorSubject<LoaderConfiguration>;

  public loaderConfiguration$: Observable<LoaderConfiguration>;

  public constructor(private readonly _loggerService: LoggerService) {
    this._defaultLoaderConfiguration = {
      bufferValue: 0,
      isVisible: false,
      mode: 'indeterminate',
      value: 0,
    };

    this._loaderConfigurationSubject = new BehaviorSubject<LoaderConfiguration>(
      this._defaultLoaderConfiguration,
    );

    this.loaderConfiguration$ = this._loaderConfigurationSubject.asObservable();

    this._loggerService.logServiceInitialization('LoaderService');
  }

  public showLoader(): void {
    this._loaderConfigurationSubject.next({
      ...this._defaultLoaderConfiguration,
      isVisible: true,
      mode: 'indeterminate',
    });
  }

  public hideLoader(): void {
    this._loaderConfigurationSubject.next({
      ...this._defaultLoaderConfiguration,
      isVisible: false,
    });
  }
}
