import {ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import Aura from '@primeng/themes/aura';
import {providePrimeNG} from "primeng/config";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
