import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {Restangular} from 'ngx-restangular';
import {RestService} from '@core/http/rest.service';
import {Auth} from 'aws-amplify';
import {CognitoRequests} from '@users/users.models';
import {ISignUpResult} from 'amazon-cognito-identity-js';
import {environment} from '@environment/environment';
import {CognitoUser} from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class CognitoService extends RestService {

  constructor(restangular: Restangular) {
    super(restangular);
  }

  signUp(request: CognitoRequests.SignUp.Request): Observable<ISignUpResult> {
    return CommonsService.promiseToObservable(Auth.signUp(super.serialize(request)));
  }

  confirmSignUp(request: CognitoRequests.ConfirmSignUp.Request) {
    return CommonsService.promiseToObservable(Auth.confirmSignUp(request.phone_number, request.token, {}));
  }

  resendSignUp(request: CognitoRequests.ResendSignUp.Request) {
    return CommonsService.promiseToObservable(Auth.resendSignUp(request.phone_number));
  }

  signIn(request: CognitoRequests.SignIn.Request): Observable<CognitoUser> {
    return CommonsService.promiseToObservable(Auth.signIn(super.serialize(request)));
  }

  signOut(global: boolean) {
    return CommonsService.promiseToObservable(Auth.signOut({global}));
  }

  forgotPassword(request: CognitoRequests.ForgotPassword.Request) {
    return CommonsService.promiseToObservable(Auth.forgotPassword(request.user_name));
  }

  forgotPasswordSubmit(request: CognitoRequests.ForgotPasswordSubmit.Request) {
    return CommonsService.promiseToObservable(
        Auth.forgotPasswordSubmit(request.email, request.token, request.password));
  }

  changePassword(request: CognitoRequests.ChangePassword.Request) {
    return CommonsService.promiseToObservable(this.currentAuthenticatedUser()
        .then(user => {
          return Auth.changePassword(user, request.old_password, request.new_password);
        }));
  }

  verifyCurrentUserAttribute(type: string) {
    return CommonsService.promiseToObservable(Auth.verifyCurrentUserAttribute(type));
  }

  verifyCurrentUserAttributeSubmit(request: CognitoRequests.VerifyCurrentUserAttributeSubmit.Request) {
    return CommonsService.promiseToObservable(Auth.verifyCurrentUserAttributeSubmit(request.type, request.token));
  }

  updateUserAttributes(request: CognitoRequests.UpdateUserAttributes.Request) {
    return CommonsService.promiseToObservable(this.currentAuthenticatedUser().then(user => {
      return Auth.updateUserAttributes(user, super.serialize(request));
    }));
  }

  currentAuthenticatedUser() {
    return Auth.currentAuthenticatedUser({bypassCache: true});
  }

  federatedSignin(type: string) {
    Auth.configure(environment.auth);
    // @ts-ignore
    return CommonsService.promiseToObservable(Auth.federatedSignIn({provider: type}));
  }
}
