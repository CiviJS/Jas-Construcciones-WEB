import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; // 👈 importante

import 'zone.js';

bootstrapApplication(App, {
  providers: [provideRouter(routes),
              provideHttpClient()
  ],
});


