import { bootstrapApplication } from '@angular/platform-browser';
import { applicationConfig } from './app/app.config';
import { MainComponent } from './app/components/main/main.component';

bootstrapApplication(MainComponent, applicationConfig).catch(
  (error: unknown) => {
    console.error(error);
  },
);
