import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {FormComponent} from '@core/components/form.component';
import {Core} from '@core/core.models';
import {DynamicFormControlModel, DynamicFormLayout} from '@ng-dynamic-forms/core';
import {Subscription} from 'rxjs';
import {CognitoService} from '@users/cognito.service';
import {CognitoRequests} from '@users/users.models';
import {
    USER_COGNITO_CONFIRM_SIGNUP_FORM_LAYOUT,
    USER_REGISTER_OTP_VERIFICATION_FORM_MODEL
} from '@users/users.form.models';
import HttpError = Core.HttpError;
import ConfirmSignUp = CognitoRequests.ConfirmSignUp;

@Component({
    selector: 'users-user-cognito-confirm-signup',
    templateUrl: './users-user-cognito-confirm-signup.component.html',
    styleUrls: ['./users-user-cognito-confirm-signup.component.scss'],
})
export class UsersUserCognitoConfirmSignupComponent extends FormComponent {

    @Input() email: string;
    @Input() phoneNumber: string;

    @Output() confirmSignUpSuccess = new EventEmitter<string>();
    @Output() confirmSignUpError = new EventEmitter<HttpError>();

    formLayout: DynamicFormLayout = USER_COGNITO_CONFIRM_SIGNUP_FORM_LAYOUT;

    user_cognito_confirm_sign_up_subscription$: Subscription;

    constructor(protected cognitoService: CognitoService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USER_REGISTER_OTP_VERIFICATION_FORM_MODEL;
    }

    createRequestData(email?: string, phone_number?: string, token?: string): ConfirmSignUp.Request {
        const request = new ConfirmSignUp.Request();

        request.email = email || this.email;
        request.phone_number = phone_number || this.phoneNumber;
        request.token = token || this.getInputModelValueAsString('token');
        return request;
    }

    confirmSignUp(request: ConfirmSignUp.Request) {
        this.user_cognito_confirm_sign_up_subscription$ =
            this.cognitoService.confirmSignUp(request)
                .subscribe(success => {
                    this.confirmSignUpSuccess.emit(success);
                    this.notificationsService.success('Registered Successfully. Please Login');
                }, error => {
                    this.confirmSignUpError.emit(error);
                    this.notificationsService.error(error.message);
                });
    }
}
