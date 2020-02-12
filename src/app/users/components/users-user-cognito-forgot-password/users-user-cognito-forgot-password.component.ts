import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {FormComponent} from '@core/components/form.component';
import {Core} from '@core/core.models';
import {Subscription} from 'rxjs';
import {DynamicFormControlModel, DynamicFormLayout} from '@ng-dynamic-forms/core';
import {CognitoService} from '@users/cognito.service';
import {CognitoRequests} from '@users/users.models';
import {
    USER_COGNITO_FORGOT_PASSWORD_FORM_LAYOUT,
    USER_COGNITO_FORGOT_PASSWORD_FORM_MODEL
} from '@users/users.form.models';
import HttpError = Core.HttpError;
import ForgotPassword = CognitoRequests.ForgotPassword;

@Component({
    selector: 'users-user-cognito-forgot-password',
    templateUrl: './users-user-cognito-forgot-password.component.html',
    styleUrls: ['./users-user-cognito-forgot-password.component.scss'],
})
export class UsersUserCognitoForgotPasswordComponent extends FormComponent {

    @Input() cognitoEmail: string;

    @Output() forgotPasswordSuccess = new EventEmitter<string>();
    @Output() cognitoForgotPasswordError = new EventEmitter<HttpError>();

    user_cognito_forgot_password_subscription$: Subscription;

    formLayout: DynamicFormLayout = USER_COGNITO_FORGOT_PASSWORD_FORM_LAYOUT;

    constructor(protected cognitoService: CognitoService, injector: Injector) {
        super(injector);
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USER_COGNITO_FORGOT_PASSWORD_FORM_MODEL;
    }

    initializeComponent() {
    }

    createRequestData(user_name?: string): ForgotPassword.Request {
        const request = new ForgotPassword.Request();
        request.user_name = user_name || this.getInputModelValueAsString('user_name');
        return request;
    }

    forgotPassword(request: ForgotPassword.Request) {
        this.user_cognito_forgot_password_subscription$ =
            this.cognitoService.forgotPassword(request)
                .subscribe(success => {
                    this.forgotPasswordSuccess.emit(success);
                    this.notificationsService.success('Verification Code Sent');
                    this.resetForm();
                });
    }
}
