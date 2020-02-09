// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    base: 'https://anymind-recruitment-python-backend.adasia.biz/',
    hashtags: 'hashtags/Python?offset=0', // in real situation the second part should be added as a parametrized query
    users: 'users/anymindgroup?offset=0'
  },
};


