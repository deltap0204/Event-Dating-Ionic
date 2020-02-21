import {Component, Injector, Input} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Users} from '@core/core.models';
import UserProfile = Users.UserProfile;

@Component({
    selector: 'user-profiles-user-matched',
    templateUrl: './user-profiles-user-matched.component.html',
    styleUrls: ['./user-profiles-user-matched.component.scss'],
})
export class UserProfilesUserMatchedComponent extends BaseComponent {

    @Input()
    userProfile: UserProfile;
    @Input()
    matchedProfile: UserProfile;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
