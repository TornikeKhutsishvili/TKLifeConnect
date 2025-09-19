import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';

import {
  initializeApp,
  provideFirebaseApp
} from '@angular/fire/app';

import {
  getFirestore,
  provideFirestore
} from '@angular/fire/firestore';

import {
  getAuth,
  provideAuth
} from '@angular/fire/auth';

import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';

import {
  provideHttpClient,
  withFetch
} from '@angular/common/http';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { firebaseConfig } from '../environments';


export const appConfig: ApplicationConfig = {

  providers: [
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ]

};
