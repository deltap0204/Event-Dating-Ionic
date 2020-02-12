import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import {ISignUpResult} from 'amazon-cognito-identity-js';

@Component({
    selector: 'users-user-signup-page',
    templateUrl: './users-user-signup-page.component.html',
    styleUrls: ['./users-user-signup-page.component.scss'],
})
export class UsersUserSignupPageComponent extends PageComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    navigateToConfirmPage(signup_result: ISignUpResult) {
        this.router.navigate(['/basic/user/confirm'],
            {queryParams: {user_name: signup_result.user.getUsername()}});
    }
}
