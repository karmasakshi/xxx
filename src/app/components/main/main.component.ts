import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, NgStyle } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoggerService } from '@xxx/services/logger/logger.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderConfiguration } from '@xxx/interfaces/loader-configuration.interface';
import { LoaderService } from '@xxx/services/loader/loader.service';

@Component({
  selector: 'xxx-main',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    NgStyle,
    AsyncPipe,
    MatProgressBarModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public isSmallViewport$: Observable<boolean>;
  public loaderConfiguration$: Observable<LoaderConfiguration>;

  public constructor(
    private readonly _breakpointObserver: BreakpointObserver,
    private readonly _loggerService: LoggerService,
    private readonly _loaderService: LoaderService,
  ) {
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
