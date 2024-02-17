import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { LoaderConfiguration } from '@xxx/interfaces/loader-configuration.interface';
import { LoaderService } from '@xxx/services/loader/loader.service';
import { LoggerService } from '@xxx/services/logger/logger.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LanguageMenuComponent } from '../language-menu/language-menu.component';
import { TranslocoModule } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';
import { Language } from '@xxx/interfaces/language.interface';
import { SettingsService } from '@xxx/services/settings/settings.service';

@Component({
  selector: 'xxx-main',
  standalone: true,
  imports: [
    LanguageMenuComponent,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    TranslocoModule,
    MatProgressBarModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public directionality: Language['directionality'];
  public isSmallViewport$: Observable<boolean>;
  public loaderConfiguration$: Observable<LoaderConfiguration>;

  public constructor(
    private readonly _breakpointObserver: BreakpointObserver,
    private readonly _loggerService: LoggerService,
    private readonly _loaderService: LoaderService,
    private readonly _settingsService: SettingsService,
  ) {
    this.directionality =
      this._settingsService.settings.language.directionality;

    this.loaderConfiguration$ = this._loaderService.loaderConfiguration$;

    this.isSmallViewport$ = this._breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .pipe(
        map((result) => result.matches),
        shareReplay(),
      );

    this._loggerService.logComponentInitialization('MainComponent');
  }
}
