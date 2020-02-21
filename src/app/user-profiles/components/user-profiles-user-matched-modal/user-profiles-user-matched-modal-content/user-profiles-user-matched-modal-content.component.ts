import {Component, Injector, OnInit} from '@angular/core';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {Users} from '@core/core.models';
import UserProfile = Users.UserProfile;

@Component({
    selector: 'user-profiles-user-matched-modal-content',
    templateUrl: './user-profiles-user-matched-modal-content.component.html',
    styleUrls: ['./user-profiles-user-matched-modal-content.component.scss'],
})
export class UserProfilesUserMatchedModalContentComponent extends BaseModalContentComponent {

    userProfile: UserProfile;
    matchedProfile: UserProfile;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
