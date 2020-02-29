import {Component, Injector, Input} from '@angular/core';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {Users} from '@core/core.models';
import {UsersUserProfileCreateOrUpdateLocationModalContentComponent} from '@users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component';
import UserProfile = Users.UserProfile;

@Component({
    selector: 'users-user-profile-create-or-update-location-modal',
    templateUrl: './users-user-profile-create-or-update-location-modal.component.html',
    styleUrls: ['./users-user-profile-create-or-update-location-modal.component.scss'],
})
export class UsersUserProfileCreateOrUpdateLocationModalComponent extends BaseModalComponent {

   
    @Input()
    userProfile: UserProfile;

    constructor(injector: Injector) {
        super(injector);
    }

    async openModal() {
        
        this.setModalData('userProfile', this.userProfile);
        await super.open(UsersUserProfileCreateOrUpdateLocationModalContentComponent);
    }

    initializeComponent() {
    }


}
