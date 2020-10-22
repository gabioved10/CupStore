// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ProductApiUrl: 'https://localhost:44396/api/Product',
  OrderApiUrl: 'https://localhost:44396/api/order',
  CategoryApiUrl: 'https://localhost:44396/api/category',
  UsersApiUrl: 'https://localhost:44396/api/users',
  OrderItemsApiUrl: 'https://localhost:44396/api/orderitems',

  firebaseConfig: {
    apiKey: "AIzaSyCued5SsNcVIN_MOQI_UtIHOYYpftJKDwY",
    authDomain: "cupsstore10.firebaseapp.com",
    databaseURL: "https://cupsstore10.firebaseio.com",
    projectId: "cupsstore10",
    storageBucket: "cupsstore10.appspot.com",
    messagingSenderId: "230345598463",
    appId: "1:230345598463:web:382398492fd6d178d6f3ca"
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


