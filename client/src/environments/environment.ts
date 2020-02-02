// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    apiKey: "AIzaSyABoDPZ-Nkdvttkw7NWfFRsRWm5I4fRVck",
    authDomain: "is2-wishlist-project.firebaseapp.com",
    databaseURL: "https://is2-wishlist-project.firebaseio.com",
    projectId: "is2-wishlist-project",
    storageBucket: "is2-wishlist-project.appspot.com",
    messagingSenderId: "381186058880",
    appId: "1:381186058880:web:6bc03bb425e2a07f45d465"
  }
};

export const SERVER_URL = 'http://127.0.0.1:3000';


export const items_categories = [
  {
    id: 1,
    value: 'Electronics'
  },
  {
    id: 2,
    value: 'Clothing'
  },
  {
    id: 3,
    value: 'Shoes'
  },
  {
    id: 4,
    value: 'Books, movies, music and games'
  },
  {
    id: 5,
    value: 'Cosmetic & body Care'
  },
  {
    id: 6,
    value: 'Bags & accessories'
  },
  {
    id: 7,
    value: 'Food & drinks'
  },
  {
    id: 8,
    value: 'Household appliances'
  },
  {
    id: 9,
    value: 'Furniture & household goods'
  },
  {
    id: 10,
    value: 'Sports & outdoor'
  },{
    id: 11,
    value: 'Toys & baby products'
  },
  {
    id: 12,
    value: 'Hobby supplies'
  },{
    id: 13,
    value: 'Bricolage, DIY & gardening'
  },
  {
    id: 14,
    value: 'Pets'
  }
];
  



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
