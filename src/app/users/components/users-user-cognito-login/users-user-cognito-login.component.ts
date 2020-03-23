import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {FormComponent} from '@core/components/form.component';
import {StorageService} from '@core/storage.service';
import {CognitoService} from '@users/cognito.service';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {CognitoRequests} from '@users/users.models';
import {UserConstants} from '@users/users.constants';
import {DynamicFormControlModel, DynamicFormLayout} from '@ng-dynamic-forms/core';
import {Core} from '@core/core.models';
import {USER_COGNITO_SIGN_IN_FORM_LAYOUT, USER_COGNITO_SIGN_IN_FORM_MODEL} from '@users/users.form.models';
import SignIn = CognitoRequests.SignIn;
import HttpError = Core.HttpError;

@Component({
  selector: 'users-user-cognito-login',
  templateUrl: './users-user-cognito-login.component.html',
  styleUrls: ['./users-user-cognito-login.component.scss'],
})
export class UsersUserCognitoLoginComponent extends FormComponent {

  @Output() signInSuccess = new EventEmitter<CognitoUser>();
  @Output() signInError = new EventEmitter<HttpError>();
  @Output() confirmationError = new EventEmitter<boolean>();
  @Output() passwordResetError = new EventEmitter<boolean>();
  formLayout: DynamicFormLayout = USER_COGNITO_SIGN_IN_FORM_LAYOUT;

  constructor(protected cognitoService: CognitoService, protected storageService: StorageService, injector: Injector) {
    super(injector);
  }

  afterInitializeComponent() {
  }

  getFormModel(): DynamicFormControlModel[] {
    return USER_COGNITO_SIGN_IN_FORM_MODEL;
  }

  initializeComponent() {
  }

  createRequestData(user_name?: string, password?: string): SignIn.Request {
    const request = new SignIn.Request();
    request.user_name = user_name || this.getInputModelValueAsString('user_name');
    request.password = password || this.getInputModelValueAsString('password');
    return request;
  }


  signIn(request: SignIn.Request) {
        this.cognitoService.signIn(request)
            .subscribe(user => {
              this.signInSuccess.emit(user);
              this.resetForm();
            }, error => {
              switch (error.code) {
                case UserConstants.COGNITO_ERROR_STATUS_CODES.USER_NOT_CONFIRMED_EXCEPTION:
                  this.confirmationError.emit(true);
                  this.notificationsService.error(error.message);
                  break;
                case UserConstants.COGNITO_ERROR_STATUS_CODES.NOT_AUTHORIZED_EXCEPTION:
                  this.signInError.emit(error);
                  this.notificationsService.error(error.message);
                  break;
                case UserConstants.COGNITO_ERROR_STATUS_CODES.USER_NOT_FOUND_EXCEPTION:
                  this.signInError.emit(error);
                  this.notificationsService.error(error.message);
                  break;
                case UserConstants.COGNITO_ERROR_STATUS_CODES.PASSWORD_REST_REQUIRED_EXCEPTION:
                  this.passwordResetError.emit(error);
                  this.resetForm();
                  break;
              }
            });
  }

}
