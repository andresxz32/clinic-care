import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, TitleStrategy, withComponentInputBinding} from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import {routes} from './app.routes';
import {TemplatePageTitleStrategy} from './core/strategies/template-page-title.strategy';
import {provideHttpClient} from '@angular/common/http';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withComponentInputBinding()),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic'
      }
    },
  ]
};
