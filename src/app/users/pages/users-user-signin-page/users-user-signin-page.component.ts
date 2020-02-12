import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import {Users} from '@core/core.models';
import UserProfile = Users.UserProfile;

@Component({
    selector: 'users-user-signin-page',
    templateUrl: './users-user-signin-page.component.html',
    styleUrls: ['./users-user-signin-page.component.scss'],
})
export class UsersUserSigninPageComponent extends PageComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    navigateToLandingPage() {
        this.navigateAndSetRoot('/signedin/profile/dashboard');
    }

    setUserProfileAndNavigate(user_profile: UserProfile) {
        this.authService.setLoggedProfile(user_profile).then(success => {
            this.loggedProfile = user_profile;
            this.navigateToLandingPage();
        });
    }

}
