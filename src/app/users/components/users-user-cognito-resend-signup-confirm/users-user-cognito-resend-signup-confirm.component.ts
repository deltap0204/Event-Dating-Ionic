import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Core} from '@core/core.models';
import {Subscription} from 'rxjs';
import {CognitoService} from '@users/cognito.service';
import {CognitoRequests} from '@users/users.models';
import HttpError = Core.HttpError;
import ResendSignUp = CognitoRequests.ResendSignUp;

@Component({
    selector: 'users-user-cognito-resend-signup-confirm',
    templateUrl: './users-user-cognito-resend-signup-confirm.component.html',
    styleUrls: ['./users-user-cognito-resend-signup-confirm.component.scss'],
})
export class UsersUserCognitoResendSignupConfirmComponent extends BaseComponent {

  @Input() phoneNumber: string;

  @Output() resendSignUpSuccess = new EventEmitter<string>();
  @Output() resendSignUpError = new EventEmitter<HttpError>();

  user_cognito_resend_sign_up_subscription$: Subscription;

  constructor(protected cognitoService: CognitoService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }

  createRequestData(phone_number?: string): ResendSignUp.Request {
    const request = new ResendSignUp.Request();
    request.phone_number = phone_number || this.phoneNumber;
    return request;
  }

  resendSignUp(request: ResendSignUp.Request) {
    this.user_cognito_resend_sign_up_subscription$ =
        this.cognitoService.resendSignUp(request)
            .subscribe(success => {
              this.resendSignUpSuccess.emit(success);
              this.notificationsService.success('Code Sent');
            }, error => {
              this.resendSignUpError.emit(error);
              this.notificationsService.error(error.message);
            });
  }


}
