export const environment = {
  production: true,
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
