import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn:
    'https://60fa0959e065446cb51164facaa243e3@o485764.ingest.sentry.io/5694714',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: [
        'localhost',
        'https://www.nhcarrigan.com/timezone-chart/',
      ],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
