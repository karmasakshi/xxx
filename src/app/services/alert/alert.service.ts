import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public constructor(
    private readonly _matSnackBar: MatSnackBar,
    private readonly _settingsService: SettingsService,
    private readonly _loggerService: LoggerService,
  ) {
    this._loggerService.logServiceInitialization('AlertService');
  }

  public showAlert(
    message: string,
    action?: string,
    actionFunction?: () => void,
  ): void {
    const matSnackBarRef: MatSnackBarRef<TextOnlySnackBar> =
      this._matSnackBar.open(message, action, {
        direction: this._settingsService.languageDirectionality,
        duration: 5000,
      });

    if (actionFunction) {
      matSnackBarRef.onAction().subscribe(() => {
        actionFunction();
      });
    }
  }
}
