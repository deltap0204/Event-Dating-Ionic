import {Component, Injector} from '@angular/core';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {Users} from '@core/core.models';
import UserProfile = Users.UserProfile;

@Component({
    selector: 'users-user-profile-create-or-update-location-modal-content',
    templateUrl: './users-user-profile-create-or-update-location-modal-content.component.html',
    styleUrls: ['./users-user-profile-create-or-update-location-modal-content.component.scss'],
})
export class UsersUserProfileCreateOrUpdateLocationModalContentComponent extends BaseModalContentComponent {

   
    userProfile: UserProfile;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
