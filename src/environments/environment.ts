// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: 'https://pcfruitproject.azurewebsites.net/api',
  // baseURL: 'https://localhost:5001/api',
  firebase: {
    apiKey: 'AIzaSyALR7tJqpt0yfTmGQxNKge5kxfAJO72O70',
    authDomain: 'pcfruit-e0e73.firebaseapp.com',
    databaseURL: 'https://pcfruit-e0e73.firebaseio.com',
    projectId: 'pcfruit-e0e73',
    storageBucket: 'pcfruit-e0e73.appspot.com',
    messagingSenderId: '950211397847',
    // appId: '1:950211397847:web:97b430ab883c10fbc44892'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
