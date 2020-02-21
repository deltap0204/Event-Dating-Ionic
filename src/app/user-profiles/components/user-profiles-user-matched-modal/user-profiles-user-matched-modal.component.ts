import {Component, Injector, Input, OnInit} from '@angular/core';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {UsersUserProfileCreateOrUpdateModalContentComponent} from '@users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component';
import {UserProfilesUserMatchedModalContentComponent} from '@user-profiles/components/user-profiles-user-matched-modal/user-profiles-user-matched-modal-content/user-profiles-user-matched-modal-content.component';
import {Users} from '@core/core.models';
import UserProfile = Users.UserProfile;

@Component({
    selector: 'user-profiles-user-matched-modal',
    templateUrl: './user-profiles-user-matched-modal.component.html',
    styleUrls: ['./user-profiles-user-matched-modal.component.scss'],
})
export class UserProfilesUserMatchedModalComponent extends BaseModalComponent {

    @Input()
    userProfile: UserProfile;
    @Input()
    matchedProfile: UserProfile;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    async openModal(userProfile?: UserProfile, matchedProfile?: UserProfile) {
        this.setModalData('userProfile', userProfile || this.userProfile);
        this.setModalData('matchedProfile', matchedProfile || this.matchedProfile);
        await super.open(UserProfilesUserMatchedModalContentComponent);
    }

}

@Component({
    selector: 'user-profiles-user-matched-modal-no-template',
    templateUrl: './user-profiles-user-matched-modal-no-template.component.html',
    styleUrls: ['./user-profiles-user-matched-modal.component.scss'],
})
export class UserProfilesUserMatchedModalNoTemplateComponent extends UserProfilesUserMatchedModalComponent {
}
