import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {ISignUpResult} from 'amazon-cognito-identity-js';
import {FormComponent} from '@core/components/form.component';
import {Subscription} from 'rxjs';
import {DynamicFormControlModel, DynamicFormLayout} from '@ng-dynamic-forms/core';
import {Core} from '@core/core.models';
import {CognitoService} from '@users/cognito.service';
import {CognitoRequests} from '@users/users.models';
import {getUserCognitoSignupFormModel, USER_COGNITO_SIGNUP_FORM_LAYOUT} from '@users/users.form.models';
import HttpError = Core.HttpError;
import SignUp = CognitoRequests.SignUp;
import CognitoSignupUserAttribute = CognitoRequests.CognitoSignupUserAttribute;

@Component({
    selector: 'users-user-cognito-signup',
    templateUrl: './users-user-cognito-signup.component.html',
    styleUrls: ['./users-user-cognito-signup.component.scss'],
})
export class UsersUserCognitoSignupComponent extends FormComponent {

    @Output() signUpSuccess = new EventEmitter<ISignUpResult>();
    @Output() signUpError = new EventEmitter<HttpError>();
    formLayout: DynamicFormLayout = USER_COGNITO_SIGNUP_FORM_LAYOUT;

    user_cognito_sign_up_subscription$: Subscription;

    constructor(protected cognitoService: CognitoService, injector: Injector) {
        super(injector);
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return getUserCognitoSignupFormModel();
    }

    initializeComponent() {
    }

    createRequestData(user_name?: string, password?: string, email?: string, phone_number?: string, name?: string,
                      gender?: string, birthdate?: Date): SignUp.Request {

        const attributes = new CognitoSignupUserAttribute();
        const request = new SignUp.Request();
        request.attributes = new CognitoSignupUserAttribute();
        request.password = password || this.getInputModelValueAsString('password');
        attributes.email = user_name || this.getInputModelValueAsString('email');
        attributes.phone_number = phone_number || this.getInputModelValueAsString('user_name');
        request.user_name = attributes.phone_number;
        request.attributes = attributes;
        return request;
    }

    signUp(request: SignUp.Request) {
        this.user_cognito_sign_up_subscription$ =
            this.cognitoService.signUp(request)
                .subscribe(success => {
                    this.resetForm();
                    this.signUpSuccess.emit(success);
                }, error => {
                    this.signUpError.emit(error);
                    this.notificationsService.error(error.message);
                });
    }

}
