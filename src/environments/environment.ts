// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrls: {
        baseUrl: 'https://z713ez7nq7.execute-api.us-east-1.amazonaws.com/beta-2',
        // baseUrl: 'http://localhost:3000',
    },
    auth: {
        region: 'us-east-1', // REQUIRED - Amazon Cognito Region
        userPoolId: 'us-east-1_TllKLuipC', // OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: '1v6ifj1745jlv27o9mcmmgfp16', // OPTIONAL - Amazon Cognito Web Client ID
        loggingLevel: 'ERROR',
    },
    dateOfBirthYearLimit: 14,
    stripePublicKey: 'pk_test_JawTCR5mHnPCU1Uq5ZhN6yhz',
    routeTracing: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
