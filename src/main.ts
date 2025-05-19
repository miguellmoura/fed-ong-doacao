import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { routes } from './app/app.routes';
import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { bootstrapApplication as angularBootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

function bootstrapApplication(AppComponent: any, options: { providers: EnvironmentProviders[] }) {
  return angularBootstrapApplication(AppComponent, {
    providers: options.providers
  }).catch(err => console.error(err));
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    )
  ]
});

