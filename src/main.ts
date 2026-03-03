import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { apiConfig } from './app/core/api.config';
import { environment } from './environments/environment';

if (environment.name.toLowerCase() === 'local') {
  apiConfig.restApiUrl = environment.restApiUrl;
}

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
