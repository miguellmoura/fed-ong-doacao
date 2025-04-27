import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { routes } from './app/app.routes';
import { EnvironmentProviders } from '@angular/core';
import { bootstrapApplication as angularBootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

function bootstrapApplication(AppComponent: any, options: { providers: EnvironmentProviders[] }) {
  return angularBootstrapApplication(AppComponent, {
    providers: options.providers
  }).catch(err => console.error(err));
}

bootstrapApplication(AppComponent, {
  providers: [
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

