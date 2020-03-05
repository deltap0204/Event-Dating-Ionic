import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import {Observable} from 'rxjs';

@Component({
    selector: 'users-user-signup-confirm-page',
    templateUrl: './users-user-signup-confirm-page.component.html',
    styleUrls: ['./users-user-signup-confirm-page.component.scss'],
})
export class UsersUserSignupConfirmPageComponent extends PageComponent {

    user_name$: Observable<string>;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.user_name$ = this.getQueryParameterObservable('user_name');
    }


    navigateToSignin() {
        this.router.navigateByUrl('/basic/user/signin');
    }
}
