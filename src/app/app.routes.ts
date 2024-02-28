import { Routes } from '@angular/router';
import { HomePageComponent } from '@xxx/components/home-page/home-page.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';

export const routes: Routes = [
  { component: HomePageComponent, path: '' },
  { component: HelpPageComponent, path: 'help' },
  { component: SettingsPageComponent, path: 'settings' },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];
