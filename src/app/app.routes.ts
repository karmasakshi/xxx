import { Routes } from '@angular/router';
import { HomePageComponent } from '@xxx/components/home-page/home-page.component';
import { HelpPageComponent } from './components/help-page/help-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'help', component: HelpPageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
