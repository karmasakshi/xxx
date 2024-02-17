import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { APP_NAME } from '@xxx/constants/app-name.constant';
import { Language } from '@xxx/interfaces/language.interface';
import { LoaderConfiguration } from '@xxx/interfaces/loader-configuration.interface';
import { LoaderService } from '@xxx/services/loader/loader.service';
import { LoggerService } from '@xxx/services/logger/logger.service';
import { SettingsService } from '@xxx/services/settings/settings.service';
import { Observable } from 'rxjs';
import { LanguageMenuComponent } from '../language-menu/language-menu.component';

@Component({
  selector: 'xxx-main',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule,
    TranslocoModule,
    LanguageMenuComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public appName: string;
  public directionality: Language['directionality'];
  public isSmallViewport: boolean;
  public loaderConfiguration$: Observable<LoaderConfiguration>;

  public constructor(
    private readonly _breakpointObserver: BreakpointObserver,
    private readonly _loaderService: LoaderService,
    private readonly _loggerService: LoggerService,
    private readonly _settingsService: SettingsService,
  ) {
    this.appName = APP_NAME;

    this.directionality =
      this._settingsService.settings.language.directionality;

    this.isSmallViewport = this._breakpointObserver.isMatched([
      Breakpoints.Handset,
      Breakpoints.Tablet,
    ]);

    this.loaderConfiguration$ = this._loaderService.loaderConfiguration$;

    this._loggerService.logComponentInitialization('MainComponent');
  }
}
