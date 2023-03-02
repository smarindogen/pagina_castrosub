// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  backend: "http://localhost:3500",
  firebase: {
    projectId: 'castrosub-907ca',
    appId: '1:654790319561:web:cd789ba51a299783405c18',
    databaseURL: 'https://castrosub-907ca.firebaseio.com',
    storageBucket: 'castrosub-907ca.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAQkaGx-IPpAMbotSrgPp2QeG7SS4uRBt4',
    authDomain: 'castrosub-907ca.firebaseapp.com',
    messagingSenderId: '654790319561',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
