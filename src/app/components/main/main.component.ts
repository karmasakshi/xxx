import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoggerService } from '@xxx/services/logger/logger.service';

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
    AsyncPipe,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  private _breakpointObserver: BreakpointObserver;
  private _loggerService: LoggerService;

  public isSmallViewport$: Observable<boolean>;

  public constructor() {
    this._breakpointObserver = inject(BreakpointObserver);
    this._loggerService = inject(LoggerService);

    this.isSmallViewport$ = this._breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .pipe(
        map((result) => result.matches),
        shareReplay(),
      );

    this._loggerService.logComponentInitialization('MainComponent');
  }
}
